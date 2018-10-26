import * as styled from './header.css'
import * as React from 'react'

class Header extends React.Component {
    constructor (props: Readonly<any>) {
        super(props)
    }

    render () {
        return (
            <header className={styled.header}>
                <nav>
                    <ul>
                        <li><a href='#'><span>Portfolio</span></a></li>
                        <li><a href='#'><span>Management</span></a></li>
                        <li><a href='#'><span>Skills</span></a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
