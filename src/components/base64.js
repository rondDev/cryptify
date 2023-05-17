import React, { useState } from "react";
import { encode, decode } from 'js-base64';
import { Input, Output } from "./textfields";

export default function Base64() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [decodeToggle, setDecodeToggle] = useState(false);

    const handleChange = (textInput) => {
        setInputValue(textInput);
        if(decodeToggle) {
            setOutputValue(decode(textInput));
        }
        else {
            setOutputValue(encode(textInput));
        }
    }

    return (<div>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}