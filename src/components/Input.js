import React from 'react';
import './Input.css'

const Input = ({inputText}) => {
    return (
        <div className='input'>
            {inputText}
        </div>
    )
}

export default Input;