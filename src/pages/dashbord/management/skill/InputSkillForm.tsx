import * as React from 'react'
import { Category } from '../../../../api/enums/Category'
import { InputWithLabel } from '../../../../components/shared/form/InputWithLabel'
import { Select } from '../../../../components/shared/input/Select'

export const InputSkillForm = () => {
    return <div>
        <InputWithLabel labelText={'スキル'}
                        inputComponent={<Select options={Category.convertSelectInputHelper().options} name={'aa'}/>}/>
    </div>
}
