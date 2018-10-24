import {SelectItem, SelectInputHelper} from '../../components/helper/SelectInputHelper'

enum Category {
    Language,
    Framework,
    Tool
}

namespace Category {
    export function getName (type: Category) {
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

    export function convertSelecInputHelper (): SelectInputHelper {
        let options: Array<SelectItem> = new Array<SelectItem>()
        for (let c in Category) {
            options.push(new SelectItem(Category[c.toString()], c))
        }
        return new SelectInputHelper(options)
    }
}


export {
    Category
}