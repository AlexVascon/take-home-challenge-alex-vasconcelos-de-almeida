import React, { FC, useEffect, useState } from 'react'
import { Book, sortAlphabetically, sortedList } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'
import CircularProgress from '@mui/material/CircularProgress'

export const BookPage: FC<PageProps & {book: Book}> = ({ book, selectActive }) => {
    const [characters, setCharacters] = useState<any[]>([])
    const [filtered, setFiltered] = useState<any[]>([])
    const [toggle, setToggle] = useState<boolean>(false)
    useEffect(() => {
        const asyncFunction = async () => {
            const characterObjects = await sortedList(book.characters)
            if(characterObjects) {
                const objectUrls = characterObjects.map(obj => obj.url)
                setCharacters(objectUrls)
                setFiltered(characterObjects)
            } 
        }
       asyncFunction()
    },[book.characters])

    const toggleMaleOnly = async () => {
        if(!toggle) {
            const result = filtered.filter(obj => obj.gender === 'Male')
            const maleCharacters = result.map(obj => obj.url)
            setCharacters(maleCharacters)
            setToggle(!toggle)
        } else {
            const urls = filtered.map(obj => obj.url)
            setCharacters(urls)
            setToggle(!toggle)
        } 
    }

    return <div>
        <div className="row">
            <h1>Book: {book.name}</h1>
        </div>
        <button onClick={() => toggleMaleOnly()}>male</button>
        {characters && <RefList list={[...characters]} title="Characters" onClickItem={selectActive} />}
        {characters.length === 0 && <CircularProgress />}
    </div>
}

export default BookPage
