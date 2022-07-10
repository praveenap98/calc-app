import { evaluate } from 'mathjs';
import React from 'react';
import './Button.css'

const Button = ({text, setInputText, inputText}) => {

    const clickHandler = () => {
        console.log(text);
        if(text === '=')
            setInputText(evaluate(inputText));
        else if(text === '+' || text === '-' || text === '*' || text === '/')
        setInputText(`${inputText} ${text} `);
        else
        setInputText(inputText+""+text);

    }

    return(
        <div onClick={clickHandler} className={`button ${typeof text === 'string' ? 'orange' : null}`}>{text}</div>
    )
}

export default Button;