import * as React from 'react'
import { InputSkillForm } from './InputSkillForm'

export class SkillPage extends React.Component {
    constructor (props: any) {
        super(props)
    }

    handleClick (e: any) {
        e.target.preventDefault()
    }

    render = () => <form>
        <InputSkillForm/>
        <input type='text' name='category.input' onClick={() => this.handleClick(event)}/>
    </form>
}
