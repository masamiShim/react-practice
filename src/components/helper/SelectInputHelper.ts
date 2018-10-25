export class SelectOption {
    readonly code: number
    readonly name: string

    constructor (code: number, name: string) {
        this.code = code
        this.name = name
    }

    getCode (): number {
        return this.code
    }

    getName (): string {
        return this.name
    }
}

export class SelectInputHelper {
    readonly options: Array<SelectOption>

    constructor (options: Array<SelectOption>) {
        this.options = options
    }

    getOptions (): Array<SelectOption> {
        return this.options
    }
}
