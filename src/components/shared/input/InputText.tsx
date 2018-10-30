import * as React from 'react'

export class InputText extends React.Component {
    constructor (props: any) {
        super(props)
        this.state = { name: '', val: props.val }
    }

    handleClick = (e: any) => this.setState({ val: e.target.value })

    render = () =>
        <input type='text' onClick={() => this.handleClick(event)}/>


}

