import React, { FC, useEffect, useState } from 'react'
import { Book, Character, urlObject } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const CharacterPage: FC<PageProps & {character: Character}> = ({ character, selectActive, }) => {
    const [allegiance, setAllegiance] = useState<string>('')
    const [spouse, setSpouse] = useState<string>('')
   
    useEffect(() => {
        const asyncFunction = async () => {
            const allegianceName = await urlObject(character.allegiances[0])
            if(allegianceName) setAllegiance(allegianceName)
        }
        asyncFunction()
    }, [character.allegiances])

    useEffect(() => {
        const asyncFunction = async () => {
            const spouseName = await urlObject(character.spouse)
            if(spouseName) setSpouse(spouseName)
        }
        asyncFunction()
    }, [character.spouse])

    return <div>
        <div className="row">
            <h1>Character: {character.name}</h1>
        </div>

        <div className="row">
            <p>{character.name} {character.aliases[0] && ', the ' + character.aliases[0]} {character.titles[0] && ', the ' + character.titles[0]} {allegiance && 'of ' + allegiance}</p>
            {character.spouse ? <p>{character.name} is married to {spouse && spouse}.</p> : ''}
        </div>

        <RefList list={[...character.books, ...character.povBooks]} title="Books" onClickItem={selectActive}/>
        <RefList list={[...character.allegiances]} title="Allegiances" onClickItem={selectActive}/>
    </div>
}

export default CharacterPage
