import { Command } from "../../class/Command";
import { CommandInteraction, CommandInteractionOptionResolver, SlashCommandBuilder, codeBlock } from "discord.js";
import { TypeScriptBot } from "../../class/TypeScriptBot";
import { inspect as util_inspect } from 'util';
import { TextFileGenerator } from "discord.js-v14-helper";

export default new Command({
    command_data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription('Evaluate something.')
        .addStringOption((opt) => opt.setName('code').setDescription('The code to evaluate.').setRequired(true))
        .toJSON(),
    options_data: {
        owner_only: true
    },
    run: async (client: TypeScriptBot, interaction: CommandInteraction, args: CommandInteractionOptionResolver) => {
        const evaluation_code = args.getString('code');

        await interaction.deferReply();

        try {
            let code: any;

            const code_evaluated = eval(evaluation_code);

            if (typeof code_evaluated !== 'string') {
                code = util_inspect(code_evaluated, { depth: 0 });
            } else {
                code = code_evaluated;
            };

            const file = new TextFileGenerator(code)
                .setFileName('output.js')
                .createFile();

            await interaction.editReply({
                content: `Status: **Success**\nInput: ${codeBlock('js', evaluation_code)}\nOutput:`,
                files: [
                    file
                ]
            });
        } catch (err) {
            const file = new TextFileGenerator(err)
                .setFileName('output.txt')
                .createFile();

            await interaction.editReply({
                content: `Status: **Fail**\nInput: ${codeBlock('js', evaluation_code)}\nOutput:`,
                files: [
                    file
                ]
            });
        };
    }
});
