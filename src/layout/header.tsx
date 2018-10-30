import * as styled from './header.css'
import * as React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor (props: Readonly<any>) {
        super(props)
    }

    render () {
        return (
            <header className={styled.header}>
                <nav>
                    <ul>
                        <li><Link to='/'>Portfolio</Link>
                        </li>
                        <li><Link to='/management'>Management</Link>
                        </li>
                        <li><Link to='/skill'>Skills</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
