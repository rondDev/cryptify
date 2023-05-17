import React, { useState } from "react";
import { Input, Output } from "./textfields";

export default function Uppercase() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [uppercase, setUppercase] = useState(true)

    const handleChange = (textInput) => {
        setInputValue(textInput);
        if(textInput != null && uppercase) {
            setOutputValue(textInput.toUpperCase());
        }
        else if (textInput != null && !uppercase) {
            setOutputValue(textInput.toLowerCase())
        }
    }

    return (<div>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}