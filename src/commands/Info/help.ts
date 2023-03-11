import { Command } from "../../class/Command";
import { CommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { TypeScriptBot } from "../../class/TypeScriptBot";

export default new Command({
    command_data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Replies with the help menu.')
        .toJSON(),
    run: async (client: TypeScriptBot, interaction: CommandInteraction) => {
        await interaction.deferReply();

        const commands = client.commands_collection.map((cmd) => `/${cmd['command_data']['name']}`);

        await interaction.editReply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Help command')
                    .setDescription('** **' + commands.join(', '))
                    .setFooter({
                        text: 'Built by TypeScript with <3 from T.F.A#7524'
                    })
                    .setColor('Blurple')
            ]
        })
    }
});
