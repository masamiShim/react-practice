import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Header from './layout/header'
import Footer from './layout/footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import * as styled from './index.css'

// const skills: Array<Language> = SkillRepository.findAll()
ReactDOM.render(
    <Router>
        <div className={styled.content}>
            <Header/>
            <Route path='/' component={Home}/>
            <Footer/>
        </div>
    </Router>
    ,
    document
        .getElementById('content')
)
