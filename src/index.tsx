import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styled from './index.css'
import Header from './layout/header'
import Footer from './layout/footer'
import { Item, ItemList } from './components/index/skillCategory'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Content = (props: any) => {
    return <div className={styled.content}>{props.contents}</div>
}

const tes: Array<Item> = []
tes.push(new Item('item1', 1, 0))
tes.push(new Item('item2', 2, 2))
tes.push(new Item('item3', 3, 3))

const App = () => {
    return <Content contents={<ItemList items={tes}/>}/>
}

// const skills: Array<Language> = SkillRepository.findAll()
ReactDOM.render(
    <Router>
        <div>
            <Header/>
            <Route path='/' component={App}/>
            <Footer/>
        </div>
    </Router>
    ,
    document
        .getElementById('content')
)
