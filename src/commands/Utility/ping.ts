import { Command } from "../../class/Command";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { TypeScriptBot } from "../../class/TypeScriptBot";

export default new Command({
    command_data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!')
        .toJSON(),
    run: async (client: TypeScriptBot, interaction: CommandInteraction) => {
        await interaction.reply({
            content: 'Pong! ' + client.ws.ping + 'ms.'
        });
    }
});
