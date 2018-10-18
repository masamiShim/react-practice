import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Item {
    constructor(private name: string, private price: number, private stock: number) {
    }

    isStockEmpty(): boolean {
        return this.stock === 0;
    }
}

const ItemList = (props) => {
    const items: Arrays<Item> = props.items;
    return <ul className="item-list">
        {props.items.map(item => <ItemDetail item={item}/>)}
    </ul>;
};

const ItemDetail = (props) => {
    const item: Item = props.item;
    return <li className={'item' + item.stock === 0 ? ' soldout' : ''}>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}</div>
    </li>;
};

const tes: any;
tes.push(new Item('item1', 1, 0));
tes.push(new Item('item2', 2, 2));
tes.push(new Item('item3', 3, 3));

ReactDOM.render(
     <ItemList items={tes}/>,
        document.getElementById('root'));

