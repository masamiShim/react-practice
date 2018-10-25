import * as styled from './skillCategory.css'
import * as React from 'react'

/**
 * ポートフォリオのSKILL, FW, TOOL表示部分のコンポーネント
 */
interface ItemProps {
    name: string
    price: number
    stock: number

    isStockEmpty (): boolean
}

export class Item implements ItemProps {
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

export const ItemList = (props: any) => {
    return <ul className={styled.listContainer}>
        {props.items.map((i: Item) => <ItemDetail key={i.name} item={i}/>)}
    </ul>
}

export const ItemDd = (props: any) => {
    return <dd className={props.style}>{props.content}</dd>
}
let languages: Array<string> = new Array<string>()
languages.push('Java')
languages.push('HTML')
languages.push('CSS')
languages.push('javascript')

export const SkillList = (props: any) => {
    return <dl className={styled.listCategory}>
        <dt className={props.labelStyle}><strong>{props.labelTitle}</strong></dt>
        {props.items.map((i: string) => <ItemDd style={props.itemStyle} content={i}/>)}
    </dl>
}

const ItemDetail = (props: any) => {
    return <li key={props.item.name} className={
        styled.listItem.concat(' item')
            .concat(props.item.isStockEmpty() ? ' soldout' : '')}>
        <section className={styled.portfolioItem}>
            <div className={styled.skillContainer}>
                <SkillList labelStyle={styled.listSkillLabel}
                           labelTitle={'language / IDE'}
                           itemStyle={styled.itemSkill}
                           items={languages}/>
                <dl className={styled.listCategory}>
                    <dt className={styled.listFrameworkLabel}><strong>Framework / DB</strong></dt>
                    <dd className={styled.itemFramework}>Springboot</dd>
                    <dd className={styled.itemFramework}>scss</dd>
                    <dd className={styled.itemFramework}>JavaEE7</dd>
                    <dd className={styled.itemFramework}>jquery</dd>
                    <dd className={styled.itemFramework}>SQLServer</dd>
                    <dd className={styled.itemFramework}>Redis</dd>
                </dl>
                <dl className={styled.listCategory}>
                    <dt className={styled.listToolLabel}><strong>Tools</strong></dt>
                    <dd className={styled.itemTool}>gulp</dd>
                    <dd className={styled.itemTool}>docker</dd>
                    <dd className={styled.itemTool}>git</dd>
                    <dd className={styled.itemTool}>bitbucket</dd>
                    <dd className={styled.itemTool}>confluence</dd>
                    <dd className={styled.itemTool}>SSMS</dd>
                    <dd className={styled.itemTool}>Hinemos</dd>
                    <dd className={styled.itemTool}>JP1</dd>
                </dl>
            </div>
            <div>
                <dl>
                    <dt className={styled.projectLabel}><strong>Project</strong></dt>
                    <dd className={styled.projectTitle}>あああ</dd>
                    <dd className={styled.projectDetail}>いい</dd>
                </dl>
            </div>
        </section>
    </li>
}
