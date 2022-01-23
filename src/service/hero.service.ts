import { useEffect, useState } from 'react'

export interface Book {
    "url": string
    "name": string
    "authors": string[]
    "numberOfPages": number
    "publisher": string
    "country": string
    "mediaType": string
    "released": string
    "characters": string[] // CHAR REF
    "povCharacters": string[] // CHAR REF
}

export interface Character {
    "url": string
    "name": string
    "gender": string
    "culture": string
    "born": string
    "died": string
    "titles": string[]
    "aliases": string[]
    "father": string // CHAR REF
    "mother": string // CHAR REF
    "spouse": string // CHAR REF
    "allegiances": string[] // HOUSE REFERENCES
    "books": string[] // BOOK REF
    "povBooks": string[] // BOOK REF
    "tvSeries": string[]
    "playedBy": string[]
}

export interface House {
    "url": string
    "name": string
    "region": string
    "coatOfArms": string
    "words": string
    "titles": string[]
    "seats": string[]
    "currentLord": string // CHAR REF
    "heir": string // CHAR REF
    "overlord": string // HOUSE REF
    "founded": string
    "founder": string // CHAR REF
    "diedOut": string
    "ancestralWeapons": string[]
    "cadetBranches": string[] // HOUSE REF
    "swornMembers": string[] // CHAR REF
}

export const fetchUtil = async (url: string): Promise<Book | Character | House> => {
    const res = await fetch(url, {
        method: 'GET'
    })

    return await res.json()
}

export const useItem = (url: string) => {
    const [item, setItem] = useState<Book | Character | House | null>(null)
    useEffect(() => {
        fetchUtil(url)
            .then((resItem) => {
                setItem(resItem)
            })
    }, [url])

    return item
}

export const urlObject = async (url: string) => {
    const res = await fetch(url, {
        method: 'GET'
    })
    const object = await res.json()
    return object.name
}

export const sortedList = async (list: string[]) => {
    const urlObjects = await Promise.all(
        list.map(async url => {
            const res = await fetch(url, {
                method: 'GET'
            })
         return await res.json()
         })
    )
    const filteredNull = urlObjects.filter(obj => obj.name !== '')
    filteredNull.sort((a,b) => {
        return a.name.localeCompare(b.name)
    })
    return filteredNull
}

export const sortAlphabetically = async (list: string[]) => {
    const urlObjects = await Promise.all(
        list.map(async url => {
            const res = await fetch(url, {
                method: 'GET'
            })
         return await res.json()
         })
    )
    const filteredNull = urlObjects.filter(obj => obj.name !== '')
    filteredNull.sort((a,b) => {
        return a.name.localeCompare(b.name)
    })
    const urlsInAlphabeticalOrder = filteredNull.map(obj => obj.url)
    return urlsInAlphabeticalOrder
}

