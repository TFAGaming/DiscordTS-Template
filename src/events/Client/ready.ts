import { client } from '../../index';

client.once('ready', () => {
    console.log('Logged in as ' + client.user.tag + '.');
});