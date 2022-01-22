import React, { FC } from 'react'
import { Book, Character, House } from '../service/hero.service'
import BookPage from './Book'
import CharacterPage from './Character'
import HousePage from './House'

export interface PageProps {
    selectActive: (url: string) => void
}

export const Page: FC<PageProps & {item: Book | House | Character}> = ({ item , ...rest}) => {
    if (item.url.includes('books')) {
        return <BookPage {...rest} book={item as Book} />
    }

    if (item.url.includes('character')) {
        return <CharacterPage {...rest} character={item as Character} />
    }

    if (item.url.includes('houses')) {
        return <HousePage {...rest} house={item as House} />
    }
    return <div>OTHER RESOURCE</div>
}

export default Page
