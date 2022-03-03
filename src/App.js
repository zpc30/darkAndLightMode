import React, {useState} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';


function App() {

    const [light, setLight] = useState(false)

    function handleChange() {
        setLight(oldLight => !oldLight)
    }

    return (
            <div className='container'>
                <Header light={light} handleChange={handleChange}/>
                <MainContent light={light} /> 
            </div>
    )
}

export default App;