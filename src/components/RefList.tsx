import React, { FC, useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { Character, sortedList } from '../service/hero.service'

interface RefListProps {
    list: string[]
    title: string
    onClickItem?: (...values: any[]) => void // TODO MAYBE TYPE THIS BETTER
    toggleGender?: boolean
}

const RefList: FC<RefListProps> = ({title, list, onClickItem, toggleGender}) => {
   const [members, setMembers] = useState<Character[] | null>(null)
   const [membersCopy, setMembersCopy] = useState<Character[] | null>(null)

   useEffect(() => {
    const fetchMembers = async () => {
        const characterObjects = await sortedList(list)
        if(characterObjects) {
            setMembers(characterObjects)
            setMembersCopy(characterObjects)
        } 
       }
       fetchMembers()
   }, [list])

   useEffect(() => {
    const toggleMaleOnly = async () => {
        if(toggleGender) {
            const maleCharacters = membersCopy!.filter(obj => obj.gender === 'Male')
            setMembers(maleCharacters)
        } else {
            setMembers(membersCopy)
        } 
    }
    toggleMaleOnly()
   }, [membersCopy, toggleGender])
   
    return <div className="row">
        <h3>{title}:</h3>
        <ul className="list-group">
            {members ? members.map(member => {
                return <li key={member.url} className="list-group-item">
                    <span role='button' onClick={() => onClickItem && onClickItem(member.url)} >{member.name}</span>
                </li>
            }) : <CircularProgress />}
        </ul>
    </div>
}

export default RefList
