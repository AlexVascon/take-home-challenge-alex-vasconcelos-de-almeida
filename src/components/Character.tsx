import React, { FC, useState, useEffect } from 'react'
import { Character, fetchNameProp } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const CharacterPage: FC<PageProps & {character: Character}> = ({ character, selectActive, }) => {
    const [allegiance, setAllegiance] = useState('')
    useEffect(() => {
        const forceAsync = async () => {
            const allegianceProp = await fetchNameProp(character.allegiances[0])
            setAllegiance(allegianceProp)
        }
        forceAsync()
    }, [character.allegiances])
    
    return <div>
        <div className="row">
            <h1>Character: {character.name}</h1>
        </div>

        <div className="row">
            <p>{character.name} {character.aliases && ', the ' + character.aliases} {character.titles && ', the ' + character.titles} {allegiance && 'of ' +  allegiance}</p>
            {character.spouse && <p>{character.name + ' is married to ' + character.spouse}</p>}
        </div>
        <RefList list={[...character.books, ...character.povBooks]} title="Books" onClickItem={selectActive}/>
        <RefList list={[...character.allegiances]} title="Allegiances" onClickItem={selectActive}/>
    </div>
}

export default CharacterPage
