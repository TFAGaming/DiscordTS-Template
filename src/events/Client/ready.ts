import { client } from '../../index';
import { client_config } from '../../config/client';

client.once('ready', async () => {
    console.log('Logged in as ' + client.user.tag + '.');

    setInterval(async () => {
        const activity_chosen = client_config.activities[Math.floor(Math.random() * client_config.activities.length)];

        client.user.setPresence({
            status: 'online',
            activities: [{
                name: activity_chosen.name,
                type: activity_chosen.type,
                url: activity_chosen.type === 1 ? client_config.twitch_url ? client_config.twitch_url : 'https://www.twitch.tv/discord/' : null
            }]
        });
    }, client_config.change_presence_every_ms && typeof client_config.change_presence_every_ms === 'number' ? client_config.change_presence_every_ms : 7500);
});