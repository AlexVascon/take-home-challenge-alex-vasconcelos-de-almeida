import React, { useState } from 'react'
import './App.css';
import { Button } from './components/Button'
import { Page } from './components/Page'
import { useItem } from './service/hero.service'

function App() {
    const [activeUrl, setActiveUrl] = useState<string>('https://anapioficeandfire.com/api/characters/583')
    const item = useItem(activeUrl)
    return (
        <div className="App">
            <div className="container">
                <Button>Home</Button>
                {item ? <Page item={item} selectActive={setActiveUrl}/> : <div>spinner</div>}
            </div>
        </div>
    );
}

export default App;
