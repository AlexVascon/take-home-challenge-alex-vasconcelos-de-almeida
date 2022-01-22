import React, { FC, useEffect, useState } from 'react'
import { Book, Character } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const CharacterPage: FC<PageProps & {character: Character}> = ({ character, selectActive, }) => {
    const [allegiance, setAllegiance] = useState<string>('')
    const [allegianceURL, setAllegianceURL] = useState<string>(character.allegiances[0])
    const [spouse, setSpouse] = useState<string>('')
    const [spouseURL, setSpouseURL] = useState<string>(character.spouse)
   
    useEffect(() => {
        const fetchAllegiances = async (url: string) => {
            const res = await fetch(url, {
                method: 'GET'
            })
            const result = await res.json()
            setAllegiance(result.name)
        }
        if(allegianceURL) fetchAllegiances(allegianceURL) 
    }, [allegianceURL])

    useEffect(() => {
        const fetchSpouse = async (url: string) => {
            const res = await fetch(url, {
                method: 'GET'
            })
            const result = await res.json()
            setSpouse(result.name)
        }
        fetchSpouse(spouseURL)
    }, [spouseURL])

    return <div>
        <div className="row">
            <h1>Character: {character.name}</h1>
        </div>

        <div className="row">
            <p>{character.name} {character.aliases[0] && 'the ' + character.aliases[0]} {character.titles[0] && ', the ' + character.titles[0]} of {allegiance && allegiance}</p>
            {character.spouse ? <p>{character.name} is married to {spouse && spouse}.</p> : ''}
        </div>

        <RefList list={[...character.books, ...character.povBooks]} title="Books" onClickItem={selectActive}/>
        <RefList list={[...character.allegiances]} title="Allegiances" onClickItem={selectActive}/>
    </div>
}

export default CharacterPage
