import { client } from '../../index';

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands_collection.get(interaction.commandName);

    if (!command) return;

    try {
        if (command['options_data']) {
            if (command['options_data']['owner_only']) {
                if (interaction.user.id !== process.env.OWNER_ID) {
                    await interaction.reply({
                        content: 'This command is for the owner only!',
                        ephemeral: true
                    });

                    return;
                };
            };
        };

        command['run'](client, interaction, interaction.options);
    } catch (err) {
        console.error('[ERROR] Something went wrong with the command \'' + interaction.commandName + '\'.\n' + err);
    };
});