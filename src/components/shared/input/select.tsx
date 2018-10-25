import * as React from 'react'
import * as styled from './select.css'
import { SelectOption } from '../../helper/SelectInputHelper'

export const Select = (props: any) => {
    return <select name={props.name} className={styled.selectContainer} >
        {props.options.map((i: SelectOption) => <SelectFormItem key={i.name} option={i} electedVal={props.selectedVal}/>)}
    </select>
}

export const SelectFormItem = (props: any) => {
    return <option value={props.option.code}
                   defaultValue={props.selectedVa}>{props.option.name}</option>
}
