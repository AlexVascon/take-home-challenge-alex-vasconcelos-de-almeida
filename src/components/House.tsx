import React, { FC, useEffect, useState } from 'react'
import { House, sortedList, urlObject } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'
import CircularProgress from '@mui/material/CircularProgress'

export const HousePage: FC<PageProps & {house: House}> = ({ house, selectActive }) => {
    const [currentLord, setCurrentLord] = useState<string>('')
    const [founder, setFounder] = useState<string>('')
    const [swornMembers, setSwornMembers] = useState<string[]>([])
    const [cadetBranches, setCadetBranches] = useState<string[]>([])
    const [loadingMembers, setLoadingMembers] = useState<boolean>(true)
    const [loadingCadets, setLoadingCadets] = useState<boolean>(true)
  
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
        const fetchSwornMembers = async () => {
            const result = await sortedList(house.swornMembers)
            if(result) {
                const resultUrls = result.map(obj => obj.url)
                setSwornMembers(resultUrls)
            } 
            setLoadingMembers(false)
        }
        fetchSwornMembers()
    },[house.swornMembers])

    useEffect(() => {
        const fetchCadetBranches = async () => {
            const result = await sortedList(house.cadetBranches)
            if(result) {
                const resultUrls = result.map(obj => obj.url)
                setCadetBranches(resultUrls)
            } 
            setLoadingCadets(false)
        }
        fetchCadetBranches()
    },[house.cadetBranches])

    return <div>
        <div className="row">
            <h1>House: {house.name}</h1>
        </div>

        <div className="row">
            <p>The house, {house.name} {currentLord && 'is ruled by ' + currentLord} {house.heir && ',and will later be rules by' + house.heir}.</p>
            <p>{house.founded && 'It was founded in ' + house.founded} {house.founder && 'by ' + founder}.</p>
        </div>

        <RefList list={swornMembers} title="Sworn members" onClickItem={selectActive}/>
        {swornMembers.length === 0 && loadingMembers && <CircularProgress />}
        {swornMembers.length === 0 && !loadingMembers && <p>No member data</p>}
        <RefList list={cadetBranches} title="Cadet branches" onClickItem={selectActive} />
        {cadetBranches.length === 0 && loadingCadets && <CircularProgress />}
        {cadetBranches.length === 0 && !loadingCadets && <p>No branches data</p>}
    </div>
}

export default HousePage
