import { Category } from '../enums/Category'
export class Language {
    readonly name: string
    readonly category: Category = Category.Language

    constructor (name: string) {
        this.name = name
    }

    getName (): string {
        return this.name
    }
}

