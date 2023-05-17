import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { Input, Output } from "./textfields";

export default function Jwt() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleChange = (textInput) => {
        setInputValue(textInput);
        setOutputValue(jwtDecode(textInput))
    }

    return (<div>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}