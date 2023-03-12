import { ActivityType } from "discord.js";

export const client_config = {
    activities: [
        {
            name: 'Minecraft',
            type: 0,
            status: 'online'
        },
        {
            name: 'Spotify',
            type: 2,
            status: 'idle'
        },
        {
            name: 'YouTube',
            type: 3
        }
    ],
    twitch_url: 'https://www.twitch.tv/discord/',
    change_presence_every_ms: 7500
};