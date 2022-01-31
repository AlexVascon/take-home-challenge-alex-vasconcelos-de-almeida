import React, { FC, useState } from 'react'
import { Book } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const BookPage: FC<PageProps & {book: Book}> = ({ book, selectActive }) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleMaleOnly = () => setToggle(!toggle)

    return <div>
        <div className="row">
            <h1>Book: {book.name}</h1>
        </div>
        <p>(toggle all / filter male only)</p>
        <button className='toggle' onClick={() => toggleMaleOnly()}>{toggle ? 'all' : 'male'}</button>
        <RefList list={[...book.characters]} title="Characters" onClickItem={selectActive} toggleGender={toggle} />
    </div>
}

export default BookPage
