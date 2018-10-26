import * as React from 'react'
import * as styled from './inputText.css'

class InputText extends React.Component {
    constructor (props: any) {
        super(props)
        this.state = { name: '', val: props.val }
    }

    render = () =>
        <input type='text' name={this.state.name} onClick={handleClick()}/>
}
