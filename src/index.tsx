import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styled from './index.css'

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
        <dl className={styled.listCategory}>
            <dt className={styled.listSkillLabel}>language</dt>
            <dd className={styled.itemSkill}>Java</dd>
        </dl>
        <dl className={styled.listCategory}>
            <dt className={styled.listFrameworkLabel}>language</dt>
            <dd className={styled.itemFramework}>Java</dd>
        </dl>
        <dl className={styled.listCategory}>
            <dt className={styled.listToolLabel}>language</dt>
            <dd className={styled.itemTool}>Java</dd>
        </dl>
        <label ></label>
        <div className='item-name'>{props.item.name}</div>
        <div className='item-price'>{props.item.price}</div>
        <div className='item-stock'>{props.item.stock}</div>
        <div className='item-stock'>{props.item.isStockEmpty().toLocaleString()}</div>
    </li>
}

const Header = () => {
    return <header className={styled.header}>
        <nav>
            <ul>
                <li><a href='#'><span>menu1</span></a></li>
                <li><a href='#'><span>menu2</span></a></li>
                <li><a href='#'><span>menu3</span></a></li>
                <li><a href='#'><span>menu4</span></a></li>
            </ul>
        </nav>
    </header>
}

const Footer = () => {
    return <footer className={styled.footer}>Footer</footer>
}

const Content = (props: any) => {
    return <div className={styled.content}>{props.contents}</div>
}

const tes = []
tes.push(new Item('item1', 1, 0))
tes.push(new Item('item2', 2, 2))
tes.push(new Item('item3', 3, 3))

ReactDOM.render(
    <Content contents={<ItemList items={tes}/>}/>,
    document.getElementById('content'))

ReactDOM.render(
    <Header/>,
    document.getElementById('header'))

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer'))
