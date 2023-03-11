interface CommandOptions {
    command_data: object,
    options_data?: OptionsData,
    run: (...args: any) => any
};

interface OptionsData {
    owner_only?: boolean
};

export class Command {
    command_data: CommandOptions['command_data'];
    options_data: CommandOptions['options_data'];
    run: CommandOptions['run'];

    constructor(input: CommandOptions) {
        this.command_data = input['command_data'];
        this.options_data = input['options_data'];
        this.run = input['run'];

        return this;
    };
}