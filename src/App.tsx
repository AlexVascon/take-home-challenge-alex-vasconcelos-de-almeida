import React, { useState } from 'react'
import './App.css'
import { Page } from './components/Page'
import { useItem, fetchUtil } from './service/hero.service'

function App() {
    const [activeUrl, setActiveUrl] = useState<string>('https://anapioficeandfire.com/api/characters/583')
    const item = useItem(activeUrl)
    const returnHome = async () => {
        const res = await fetchUtil('https://anapioficeandfire.com/api/characters/583')
        setActiveUrl('https://anapioficeandfire.com/api/characters/583')
        return <Page item={res} selectActive={setActiveUrl} />
    }
    return (
        <div className="App">
            <div className="container">
                <button className='button' onClick={() => returnHome()}>Home</button>
                {item ? <Page item={item} selectActive={setActiveUrl}/> : <div>spinner</div>}
            </div>
        </div>
    );
}

export default App;
