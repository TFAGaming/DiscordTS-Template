import { Command } from "../../class/Command";
import { CommandInteraction, CommandInteractionOptionResolver, SlashCommandBuilder, AttachmentBuilder, codeBlock } from "discord.js";
import { TypeScriptBot } from "../../class/TypeScriptBot";
import { inspect as util_inspect } from 'util';

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

            await interaction.editReply({
                content: `Status: **Success**\nInput: ${codeBlock('js', evaluation_code)}\nOutput:`,
                files: [
                    new AttachmentBuilder(
                        Buffer.from(`${code}`, 'utf-8'), { name: 'output.js' }
                    )
                ]
            });
        } catch (err) {
            await interaction.editReply({
                content: `Status: **Fail**\nInput: ${codeBlock('js', evaluation_code)}\nOutput:`,
                files: [
                    new AttachmentBuilder(
                        Buffer.from(`${err}`, 'utf-8'), { name: 'output.txt' }
                    )
                ]
            });
        };
    }
});
