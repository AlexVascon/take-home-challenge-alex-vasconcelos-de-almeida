import React, { FC } from 'react'
import { House } from '../service/hero.service'
import { PageProps } from './Page'
import RefList from './RefList'

export const HousePage: FC<PageProps & {house: House}> = ({ house, selectActive }) => {
    return <div>
        <div className="row">
            <h1>House: {house.name}</h1>
        </div>

        <div className="row">
            <p>The house {house.name} is ruled by {house.currentLord}, and will later be rules by {house.heir}.</p>
            <p>It was founded in {house.founded} by {house.founder}.</p>
        </div>

        <RefList list={house.swornMembers} title="Sworn members"/>
        <RefList list={house.cadetBranches} title="Cadet branches"/>
    </div>
}

export default HousePage
