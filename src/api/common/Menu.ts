export class Menu {
    readonly items: Array<MenuItem>

    constructor (items: Array<MenuItem>) {
        this.items = items
    }
}

export class MenuItem {
    readonly name: string
    readonly url: string
    readonly ordinal: number

    constructor (name: string, url: string, ordinal: number) {
        this.name = name
        this.url = url
        this.ordinal = ordinal
    }
}
