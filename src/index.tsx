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
        <div className='item-name'>{props.item.name}</div>
        <div className='item-price'>{props.item.price}</div>
        <div className='item-stock'>{props.item.stock}</div>
        <div className='item-stock'>{props.item.isStockEmpty().toLocaleString()}</div>
    </li>
}

const tes = []
tes.push(new Item('item1', 1, 0))
tes.push(new Item('item2', 2, 2))
tes.push(new Item('item3', 3, 3))

ReactDOM.render(
    <ItemList items={tes}></ItemList>,
    document.getElementById('root'))
