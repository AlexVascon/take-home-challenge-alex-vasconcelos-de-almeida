import React, {FC} from 'react'
import { useItem } from '../service/hero.service'

const RefItem: FC<{onClick: () => void; url: string}> = ({url, onClick}) => {
    const item = useItem(url)
    return <span role="button" onClick={onClick}>{item?.name}</span>
}

export default RefItem