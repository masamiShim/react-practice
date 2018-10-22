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
                        <li><a href='#'><span>menu1</span></a></li>
                        <li><a href='#'><span>menu2</span></a></li>
                        <li><a href='#'><span>menu3</span></a></li>
                        <li><a href='#'><span>menu4</span></a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
