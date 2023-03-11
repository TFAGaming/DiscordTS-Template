import { config } from 'dotenv';
import { TypeScriptBot } from "./class/TypeScriptBot";

config();

export const client: TypeScriptBot = new TypeScriptBot();

client.load_commands();
client.load_events();
client.start();
client.deploy_commands();
