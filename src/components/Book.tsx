import React, { FC } from 'react'
import { Book } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const BookPage: FC<PageProps & {book: Book}> = ({ book, selectActive }) => {
    return <div>
        <div className="row">
            <h1>Book: {book.name}</h1>
        </div>
        <RefList list={[...book.characters, ...book.povCharacters]} title="Characters" onClickItem={selectActive} />
    </div>
}

export default BookPage
