# DiscordTS-Template
A very simple Discord bot made with [**TypeScript**](https://www.typescriptlang.org/) & [**discord.js**](https://npmjs.com/package/discord.js) version 14.

## Installation
Install `typescript` globally:

```sh
npm i -g typescript
```

Install all the required dependencies:

```sh
npm i discord.js@14 dotenv
```

Rename the file **.env.example** to **.env** and fill all the required properties.

> **Warning**
If you are using repl.it, delete the **.env** file and use **Secrets** instead.

To compile the TypeScript files to JavaScript files & run the compiled files, use the command below:

```sh
npm run build
```

or, start the old compiled JavaScript files:

```sh
npm run build-start
```

## Command example:
The class [`SlashCommandBuilder`](https://discord.js.org/#/docs/builders/main/class/SlashCommandBuilder) is from the library **@discordjs/builders**.

```ts
export default new Command({
    command_data: new SlashCommandBuilder()
        .toJSON(),
    options_data: {
        owner_only?: boolean
    },
    run: (client, interaction, args) => { }
});
```

## How it works?
You can [click here](https://www.geeksforgeeks.org/how-typescript-compilation-works/) to understand how TypeScript compiler works.
