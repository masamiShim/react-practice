import { SelectOption, SelectInputHelper } from '../../components/helper/SelectInputHelper'

enum Category {
    Language,
    Framework,
    Tool
}

namespace Category {
    export function getName (type: number) {
        switch (type) {
        case Category.Language:
            return '言語'
        case Category.Framework:
            return 'フレームワーク'
        case Category.Tool:
            return 'ツール'
        default:
            return ''
        }
    }

    export function convertSelectInputHelper (): SelectInputHelper {
        let options: Array<SelectOption> = new Array<SelectOption>()
        for (let c in Category) {
            const cInt = parseInt(Category[c], 10)
            if (isNaN(cInt)) {
                continue
            }
            options.push(new SelectOption(cInt, Category.getName(cInt)))
        }
        return new SelectInputHelper(options)
    }
}

export {
    Category
}
