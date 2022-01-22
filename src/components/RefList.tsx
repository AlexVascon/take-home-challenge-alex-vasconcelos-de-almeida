import React, { FC } from 'react'
import RefItem from './RefItem'

interface RefListProps {
    list: string[]
    title: string
    onClickItem?: (...values: any[]) => void // TODO MAYBE TYPE THIS BETTER
}

const RefList: FC<RefListProps> = ({title, list, onClickItem}) => {
   
    return <div className="row">
        <h3>{title}:</h3>
        <ul className="list-group">
            {list ? list.map(member => {
                return <li key={member} className="list-group-item">
                    <RefItem url={member} onClick={() => onClickItem && onClickItem(member)} />
                </li>
            }) : <p>Loading..</p>}
        </ul>
    </div>
}

export default RefList
