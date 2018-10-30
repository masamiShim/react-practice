import { BrowserRouter, Route } from 'react-router-dom'
import * as styled from './index.css'
import Header from './layout/header'
import { Home } from './pages/home/home'
import { SkillPage } from './pages/dashbord/management/skill/skillPage'
import Footer from './layout/footer'
import * as React from 'react'

export const App = () => (
    <BrowserRouter>
        <div className={styled.content}>
            <Header/>
            <Route exact
                   path='/'
                   component={Home}
            />
            < Route
                path='/skill'
                component={SkillPage}
            />
            < Footer/>
        </div>
    </BrowserRouter>
)
