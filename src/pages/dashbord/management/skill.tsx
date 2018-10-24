/*
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styled from './skill.css'
import Header from '/src/layout/header'
import Footer from '/src/layout/footer'
import {Language} from './api/models/Portfolio'
import {SkillRepository} from './api/repositories/SkillRepository'

const Content = (props: any) => {
    return <div className={styled.content}>{props.contents}</div>
}

const skills: Array<Language> = SkillRepository.findAll()

ReactDOM.render(
    <Content contents={<ItemList items={tes}/>}/>,
    document.getElementById('content'))

ReactDOM.render(
    <Header/>
    ,
    document.getElementById('header'))

ReactDOM.render(
    <Footer/>
    ,
    document.getElementById('footer'))

ReactDOM.render(
    <div>{skills.map((s: Language) => <div>{s.getName()}</div>)} </div>
    ,
    document.getElementById('test'))
*/