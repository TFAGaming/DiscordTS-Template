import { Command } from "../../class/Command";
import { SlashCommandBuilder } from "discord.js";

export default new Command({
    command_data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!')
        .toJSON(),
    run: async (client, interaction) => {
        await interaction.reply({
            content: 'Pong! ' + client.ws.ping + 'ms.'
        });
    }
});
