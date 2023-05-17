import React, { useState } from "react";
import { Input, Output } from "./textfields";

export default function Whitespace() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleChange = (textInput) => {
        setInputValue(textInput);
        setOutputValue(textInput.trim())
    }

    return (<div>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}