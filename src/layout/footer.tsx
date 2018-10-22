import * as styled from './footer.css'
import * as React from 'react'

class Footer extends React.Component {
    constructor (props: Readonly<any>) {
        super(props)
    }

    render () {
        return (
            <footer className={styled.footer}>Footer</footer>
        )
    }
}

export default Footer
