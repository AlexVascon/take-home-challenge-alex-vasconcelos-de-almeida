import React, { FC } from 'react'
import { Book, Character } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const CharacterPage: FC<PageProps & {character: Character}> = ({ character, selectActive}) => {
    return <div>
        <div className="row">
            <h1>Character: {character.name}</h1>
        </div>

        <div className="row">
            <p>{character.name} the {character.aliases[0]}, the {character.titles[0]} of {character.allegiances[0]}</p>
            <p>{character.name} is married to {character.spouse}.</p>
        </div>

        <RefList list={[...character.books, ...character.povBooks]} title="Books" onClickItem={selectActive}/>
        <RefList list={[...character.allegiances]} title="Allegiances" onClickItem={selectActive}/>
    </div>
}

export default CharacterPage
