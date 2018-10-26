import * as React from 'react'
import { Category } from '../../../api/enums/Category'
import { Select } from '../../../components/shared/input/select'

x

export const SkillPage = () => {
    return <form>
        <Select options={Category.convertSelecInputHelper()} name={'aa'}/>
        <input type='text' name='category.input' onClick={} />
    </form>
}
const Content = (props: any) => {
    return <div>{props.contents}</div>
}
