import * as styled from './inputWithLabel.css'
import * as React from 'react'

export const InputWithLabel = (props: any) => {
    return <div className={styled.container}>
        <div className={styled.labelContainer}>
            <label className={styled.label}>{props.labelText}</label>
        </div>
        <div className={styled.inputContainer}>
            {props.inputComponent}
        </div>
    </div>
}
