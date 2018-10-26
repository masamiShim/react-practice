import * as React from 'react'
import { Item, ItemList } from '../../components/index/skillCategory'

const tes: Array<Item> = []
tes.push(new Item('item1', 1, 0))
tes.push(new Item('item2', 2, 2))
tes.push(new Item('item3', 3, 3))

export const Home = () => {
    return <Content contents={<ItemList items={tes}/>}/>
}
const Content = (props: any) => {
    return <div>{props.contents}</div>
}
