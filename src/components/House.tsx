import React, { FC, useEffect, useState } from 'react'
import { House, sortAlphabetically, urlObject } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const HousePage: FC<PageProps & {house: House}> = ({ house, selectActive }) => {
    const [currentLord, setCurrentLord] = useState<string>('')
    const [founder, setFounder] = useState<string>('')
    const [swornMembers, setSwornMembers] = useState<string[]>([])
    const [cadetBranches, setCadetBranches] = useState<string[]>([])
  
    useEffect(() => {
        const fetchCurrentLord = async () => {
            const currentLordName = await urlObject(house.currentLord)
            if(currentLordName) setCurrentLord(currentLordName)
        }
        fetchCurrentLord()
    }, [house.currentLord])

    useEffect(() => {
        const fetchFounder = async () => {
            const founderName = await urlObject(house.founder)
            if(founderName) setFounder(founderName)
        }
        fetchFounder()
    }, [house.founder])

    useEffect(() => {
        const asyncFunction = async () => {
            const result = await sortAlphabetically(house.swornMembers)
            if(result) setSwornMembers(result)
        }
       asyncFunction()
    },[house.swornMembers])

    useEffect(() => {
        const asyncFunction = async () => {
            const result = await sortAlphabetically(house.cadetBranches)
            if(result) setCadetBranches(result)
        }
       asyncFunction()
    },[house.cadetBranches])

    return <div>
        <div className="row">
            <h1>House: {house.name}</h1>
        </div>

        <div className="row">
            <p>The house, {house.name} {currentLord && 'is ruled by ' + currentLord} {house.heir && ',and will later be rules by' + house.heir}.</p>
            <p>It was founded in {house.founded} {house.founder && 'by' + founder}.</p>
        </div>

        <RefList list={swornMembers} title="Sworn members" onClickItem={selectActive}/>
        <RefList list={cadetBranches} title="Cadet branches" onClickItem={selectActive} />
    </div>
}

export default HousePage
