# DiscordTS-Template
A very simple Discord bot made with [**TypeScript**](https://www.typescriptlang.org/) & [**discord.js**](https://npmjs.com/package/discord.js) version 14.

## Installation
Install `typescript` (view guide [here](https://www.typescriptlang.org/download)):

```sh
npm i -g typescript
```

Install all the required dependencies:

```sh
npm i discord.js@14 discord.js-v14-helper@latest dotenv mongoose ms
```

> **Note:** The `mongoose` and `ms` are not used in this project, but my library called `discord.js-v14-helper` requires both of them.

Rename the file **.env.example** to **.env** and put all the required values ([click here](https://www.npmjs.com/package/dotenv#Usage) for info).

To compile the TypeScript files to JavaScript files, use the command below:

```sh
npm run build
```

or, start the old compiled JavaScript files:

```sh
npm run build-start
```

## How it works?
When you compile the TS files by using the run script `build`, a directory called **dist** will be created automatically with some JS files. The JS files are having the same working source-codes from the TS files. When it's done from compiling the files, the run script `build-start` will start the JS files.

[Click here](https://www.geeksforgeeks.org/how-typescript-compilation-works/) for more info.
