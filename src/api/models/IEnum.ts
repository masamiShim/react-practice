/*

interface IEnumItem {
    readonly code: number
    readonly name: string
    readonly ordinal: number

    getCode(): number
    getName(): string
}

class EnumItem implements IEnumItem {

    public readonly code: number
    public readonly name: string
    public readonly ordinal: number

    constructor (code: number, name: string, ordinal: number) {
        this.code = code
        this.name = name
        this.ordinal = ordinal
    }

    getCode (): number {
        return this.code;
    }

    getName (): string {
        return this.name;
    }
}

interface IEnum {
    readonly values: Array<IEnumItem>

}

class Enum implements IEnum {

    public readonly values: Array<IEnumItem>

    constructor (...val: Array<IEnumItem>) {
        this.values = [...val]
    }


}
*/
