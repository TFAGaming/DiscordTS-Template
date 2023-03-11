import {
    ActivityType,
    Client,
    Collection,
    GatewayIntentBits
} from "discord.js";
import {
    readdirSync
} from 'fs';
import { ApplicationCommandsRegister } from "discord.js-v14-helper";

export class TypeScriptBot extends Client {
    commands_collection = new Collection<string, object>();
    commands = [];

    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds
            ],
            presence: {
                activities: [{
                    name: 'TypeScript Bot',
                    type: ActivityType.Playing
                }]
            }
        });
    };

    public async load_commands() {
        for (const directory of readdirSync('./dist/commands/')) {
            for (const file of readdirSync('./dist/commands/' + directory + '/').filter((f) => f.endsWith('.js'))) {
                const command = require('../commands/' + directory + '/' + file).default; // Because we are exporting the files with 'default' keyword

                if (command.command_data && typeof command.command_data === 'object' && command.command_data?.name) {
                    if (this.commands_collection.has(command.command_data?.name)) {
                        console.warn('[WARN] The file ' + file + ' is having the same property \'command_data.name\' from another file, this file has been skipped.');

                        continue;
                    };

                    this.commands.push(command.command_data);

                    this.commands_collection.set(command.command_data?.name, command);

                    console.log('Loaded a new command file: ' + file);
                } else {
                    console.warn('[WARN] The file ' + file + ' has been skipped due to missing property of \'command_data\' or \'command_data.name\'.');

                    continue;
                };
            };
        };

        return this;
    };

    public async load_events() {
        for (const directory of readdirSync('./dist/events/')) {
            for (const file of readdirSync('./dist/events/' + directory + '/').filter((f) => f.endsWith('.js'))) {
                require('../events/' + directory + '/' + file);

                console.log('Loaded a new event file: ' + file);
            };
        };

        return this;
    };

    public async deploy_commands() {
        const registerer = new ApplicationCommandsRegister(process.env.CLIENT_TOKEN, process.env.CLIENT_ID)
            .setApplicationCommands(this.commands)
            .setRestVersion(10);

        registerer.start().catch(console.error);

        return this;
    };

    private async delete_command(command_name: string, auto_deploy?: boolean) {
        if (!this.commands_collection.has(command_name)) return;

        this.commands_collection.delete(command_name);

        if (auto_deploy) {
            this.deploy_commands();
        };

        return this;
    };

    public async start() {
        this.login(process.env.CLIENT_TOKEN)
            .catch((err) => {
                console.error('[ERROR] Failed to login to the Discord bot.\n' + err);
            });

        return this;
    };
};