import { client } from '../../index';
import { client_presence_config } from '../../config/client';
import { PresenceUpdateStatus } from 'discord.js';

client.once('ready', async () => {
    console.log('Logged in as ' + client.user.tag + '.');

    setInterval(async () => {
        const activity_chosen = client_presence_config.activities[Math.floor(Math.random() * client_presence_config.activities.length)];

        client.user.setPresence({
            status: activity_chosen.status ? PresenceUpdateStatus[activity_chosen.status] : 'online',
            activities: [{
                name: activity_chosen.name,
                type: activity_chosen.type,
                url: activity_chosen.type === 1 ? client_presence_config.twitch_url ? client_presence_config.twitch_url : 'https://www.twitch.tv/discord/' : null
            }]
        });
    }, 7500);
});
