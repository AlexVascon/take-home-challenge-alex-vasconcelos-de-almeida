import React, { FC, useEffect, useState } from 'react'
import { Book, sortAlphabetically } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const BookPage: FC<PageProps & {book: Book}> = ({ book, selectActive }) => {
    const [characters, setCharacters] = useState<any[]>([])
    useEffect(() => {
        const asyncFunction = async () => {
            const result = await sortAlphabetically(book.characters)
            if(result) setCharacters(result)
        }
       asyncFunction()
    },[book.characters])

    return <div>
        <div className="row">
            <h1>Book: {book.name}</h1>
        </div>
        <RefList list={[...characters]} title="Characters" onClickItem={selectActive} />
    </div>
}

export default BookPage
