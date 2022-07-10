import React, { useState } from 'react';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import './App.css'



const App = () => {
    const[inputText, setInputText] = useState('');
    const text = [7,8,9,'/',4,5,6,'*',1,2,3,'+','.',0,'=','-'];
    return(
        <div className='main-container'>
            <div className='input-container'>
                <Input inputText={inputText}/>
            </div>
            <div className='button-container'>
                {
                    text.map((t) => <Button text={t} setInputText={setInputText} inputText={inputText} />)                
                }
            </div>
            <div className='clear-container'>
                <ClearButton setInputText={setInputText}/>
            </div>
        </div>
    )
}

export default App;