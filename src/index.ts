import { config } from 'dotenv';
import { TypeScriptBot } from "./class/TypeScriptBot";

config();

export const client: TypeScriptBot = new TypeScriptBot();

console.log(`
████████╗░░░███████╗░░░░█████╗░
╚══██╔══╝░░░██╔════╝░░░██╔══██╗
░░░██║░░░░░░█████╗░░░░░███████║
░░░██║░░░░░░██╔══╝░░░░░██╔══██║
░░░██║░░░██╗██║░░░░░██╗██║░░██║
░░░╚═╝░░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝

Thank you for using T.F.A#7524's project! :)
`)

client.load_commands();
client.load_events();
client.start();
client.deploy_commands();