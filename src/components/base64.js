import React, { useState } from "react";
import { encode, decode } from 'js-base64';
import { Input, Output } from "./textfields";
import { Toggle } from "./toggle";

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

    const handleToggle = () => {
        setDecodeToggle(!decodeToggle);
        let temp = inputValue;
        setInputValue(outputValue);
        setOutputValue(temp);
    }

    return (<div>
        <h2>Base64</h2>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
        <Toggle  onInputChange={handleToggle} title={decodeToggle ? 'Base64 > Text' : 'Text > Base64'  } />
    </div>);
}