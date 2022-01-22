import React, { FC, useEffect, useState } from 'react'
import { House } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const HousePage: FC<PageProps & {house: House}> = ({ house, selectActive }) => {
    const [currentLord, setCurrentLord] = useState<string>('')
    useEffect(() => {
        const fetchCurrentLord = async (url: string) => {
            const res = await fetch(url, {
                method: 'GET'
            })
            const result = await res.json()
            setCurrentLord(result.name)
        }
        fetchCurrentLord(house.currentLord)
    }, [])

    return <div>
        <div className="row">
            <h1>House: {house.name}</h1>
        </div>

        <div className="row">
            <p>The house {house.name} {currentLord && 'is ruled by ' + currentLord} {house.heir && ',and will later be rules by' + house.heir}.</p>
            <p>It was founded in {house.founded} by {house.founder}.</p>
        </div>

        <RefList list={house.swornMembers} title="Sworn members" onClickItem={selectActive}/>
        <RefList list={house.cadetBranches} title="Cadet branches" onClickItem={selectActive} />
    </div>
}

export default HousePage
