import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styled from './index.css'
import Header from './layout/header'
import Footer from './layout/footer'

interface ItemProps {
    name: string
    price: number
    stock: number

    isStockEmpty (): boolean
}

class Item implements ItemProps {
    name: string
    price: number
    stock: number

    constructor (name: string, price: number, stock: number) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    isStockEmpty (): boolean {
        return this.stock === 0
    }

}

const ItemList = (props: any) => {
    return <ul className={styled.listContainer}>
        {props.items.map((i: Item) => <ItemDetail item={i}/>)}
    </ul>
}

const ItemDetail = (props: any) => {
    return <li className={
        styled.listItem.concat(' item')
            .concat(props.item.isStockEmpty() ? ' soldout' : '')}>
        <section className={styled.portfolioItem}>
            <div className={styled.skillContainer}>
                <dl className={styled.listCategory}>
                    <dt className={styled.listSkillLabel}>language</dt>
                    <dd className={styled.itemSkill}>Java</dd>
                    <dd className={styled.itemSkill}>HTML</dd>
                    <dd className={styled.itemSkill}>CSS</dd>
                </dl>
                <dl className={styled.listCategory}>
                    <dt className={styled.listFrameworkLabel}>Framework</dt>
                    <dd className={styled.itemFramework}>Springboot</dd>
                    <dd className={styled.itemFramework}>scss</dd>
                    <dd className={styled.itemFramework}>JavaEE7</dd>
                </dl>
                <dl className={styled.listCategory}>
                    <dt className={styled.listToolLabel}>Tools</dt>
                    <dd className={styled.itemTool}>Java</dd>
                </dl>
            </div>
            <div>
                <dl>
                    <dt>プロジェクト名</dt>
                    <dd>あああ</dd>
                </dl>
                <dl>
                    <dt>内容</dt>
                    <dd>いい</dd>
                </dl>
            </div>
        </section>
    </li>
}

const Content = (props: any) => {
    return <div className={styled.content}>{props.contents}</div>
}

const tes = []
tes.push(new Item('item1', 1, 0))
tes.push(new Item('item2', 2, 2))
tes.push(new Item('item3', 3, 3))

ReactDOM.render(
    <Content contents={<ItemList items={tes}/>}/>
    ,
    document.getElementById('content'))

ReactDOM.render(
    <Header/>
    ,
    document.getElementById('header'))

ReactDOM.render(
    <Footer/>
    ,
    document.getElementById('footer'))
