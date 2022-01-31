import React, { useState } from 'react'
import './App.css'
import { Page } from './components/Page'
import { useItem } from './service/hero.service'
import CircularProgress from '@mui/material/CircularProgress'

function App() {
    const [activeUrl, setActiveUrl] = useState<string>('https://anapioficeandfire.com/api/characters/583')
    const item = useItem(activeUrl)
    const returnHome = async () => setActiveUrl('https://anapioficeandfire.com/api/characters/583')
    return (
        <div className="App">
            <div className="container">
                <button className='button' onClick={() => returnHome()}>Home</button>
                {item ? <Page item={item} selectActive={setActiveUrl}/> : <CircularProgress />}
            </div>
        </div>
    );
}

export default App;
