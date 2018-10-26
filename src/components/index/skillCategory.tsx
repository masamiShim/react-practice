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

let languages: Array<string> = []
languages.push('Java')
languages.push('HTML')
languages.push('CSS')
languages.push('javascript')

let frameworks: Array<string> = []
frameworks.push('springBoot')
frameworks.push('scss')
frameworks.push('jQuery')
frameworks.push('JavaEE7')
frameworks.push('SQLServer')
frameworks.push('redis')
let tools: Array<string> = []
tools.push('gulp')
tools.push('docker')
tools.push('git')
tools.push('bitbucket')
tools.push('confluence')
tools.push('SSMS')
tools.push('Hinemos')
tools.push('JP1')

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
                <SkillList labelStyle={styled.listFrameworkLabel}
                           labelTitle={'Framework / DB'}
                           itemStyle={styled.itemFramework}
                           items={frameworks}/>
                <SkillList labelStyle={styled.listToolLabel}
                           labelTitle={'Tools'}
                           itemStyle={styled.itemTool}
                           items={tools}/>
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
