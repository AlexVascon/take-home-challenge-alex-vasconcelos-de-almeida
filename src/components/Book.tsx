import React, { FC, useEffect, useState } from 'react'
import { Book, sortedList } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'
import CircularProgress from '@mui/material/CircularProgress'

export const BookPage: FC<PageProps & {book: Book}> = ({ book, selectActive }) => {
    const [characterUrls, setCharacterUrls] = useState<any[]>([])
    const [characters, setCharacters] = useState<any[]>([])
    const [toggle, setToggle] = useState<boolean>(false)
    useEffect(() => {
        const fetchOrderedCharacters = async () => {
            const characterObjects = await sortedList(book.characters)
            if(characterObjects) {
                const objectUrls = characterObjects.map(obj => obj.url)
                setCharacterUrls(objectUrls)
                setCharacters(characterObjects)
            } 
        }
        fetchOrderedCharacters()
    },[book.characters])

    const toggleMaleOnly = async () => {
        if(!toggle) {
            const maleCharacters = characters.filter(obj => obj.gender === 'Male')
            const maleUrls = maleCharacters.map(obj => obj.url)
            setCharacterUrls(maleUrls)
            setToggle(!toggle)
        } else {
            const urls = characters.map(obj => obj.url)
            setCharacterUrls(urls)
            setToggle(!toggle)
        } 
    }

    return <div>
        <div className="row">
            <h1>Book: {book.name}</h1>
        </div>
        <p>(toggle all / filter male only)</p>
        <button className='toggle' onClick={() => toggleMaleOnly()}>{toggle ? 'all' : 'male'}</button>
        {characterUrls && <RefList list={[...characterUrls]} title="Characters" onClickItem={selectActive} />}
        {characterUrls.length === 0 && <CircularProgress />}
    </div>
}

export default BookPage
