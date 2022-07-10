import React from 'react';
import './ClearButton.css';

const ClearButton = ({setInputText}) => {

    const clickHandler = () => {
        setInputText('');
    }

    return <div onClick={clickHandler} className='clear'>Clear</div>
}

export default ClearButton;

