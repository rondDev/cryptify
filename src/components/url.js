import React, { useState } from "react";
import { Input, Output } from "./textfields";

export default function Url() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleChange = (textInput) => {
        setInputValue(textInput);
        setOutputValue(encodeURIComponent(textInput))
    }

    return (<div>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}