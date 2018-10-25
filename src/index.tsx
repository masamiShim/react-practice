import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styled from './index.css'
import Header from './layout/header'
import Footer from './layout/footer'
import { Item, ItemList } from './components/index/skillCategory'
// import { Language } from './api/models/Portfolio'
import { Category } from './api/enums/Category'
// import { SkillRepository } from './api/repositories/SkillRepository'
import { Select } from './components/shared/input/select'

const Content = (props: any) => {
    return <div className={styled.content}>{props.contents}</div>
}

// const skills: Array<Language> = SkillRepository.findAll()

const tes = []
tes.push(new Item('item1', 1, 0))
tes.push(new Item('item2', 2, 2))
tes.push(new Item('item3', 3, 3))

ReactDOM.render(
    <Content contents={<ItemList items={tes}/>}/>,
    document.getElementById('content'))

ReactDOM.render(
    <Select options={Category.convertSelecInputHelper().getOptions()} name={'skill.name'} selectedVal={null}/>,
    document.getElementById('sel'))

ReactDOM.render(
    <Header/>
    ,
    document.getElementById('header'))

ReactDOM.render(
    <Footer/>
    ,
    document.getElementById('footer'))
