import * as React from 'react'
import * as styled from './select.css'
import { SelectItem } from '../../helper/SelectInputHelper'

export const Select = (props: any) => {
    return <select className={styled.listContainer}>
        {props.options.map((i: SelectItem) => <SelectFormItem option={i} selectedVal={props.selectedVal}/>)}
    </select>
}

export const SelectFormItem = (props: any) => {
    return <option value={props.option.code}
                   selected={props.option.code === props.selectedVa}>{props.option.name}</option>
}