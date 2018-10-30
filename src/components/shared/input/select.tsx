import * as React from 'react'
import * as styled from './select.css'
import { SelectOption } from '../../helper/SelectInputHelper'

export const Select = (props: any) => {
    return <div className={ styled.selectWrapper }>
        <select name={props.name}>
            {props.options.map((i: SelectOption) => <SelectFormItem key={i.name} option={i}
                                                                    selectedVal={props.selectedVal}/>)}
        </select>
    </div>
}

export const SelectFormItem = (props: any) => {
    return <option value={props.option.code}
                   defaultValue={props.selectedVal}>{props.option.name}</option>
}
