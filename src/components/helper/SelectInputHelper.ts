export class SelectItem {
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
    readonly options: Array<SelectItem>

    constructor (options: Array<SelectItem>) {
        this.options = options
    }

    getOptions (): Array<SelectItem> {
        return this.options
    }
}