import React, { useState } from "react";
import { Input, Output } from "./textfields";
import { Toggle } from "./toggle";

export default function Url() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [decodeToggle, setDecodeToggle] = useState(false);

    const handleChange = (textInput) => {
        setInputValue(textInput);
        if(decodeToggle){
            setOutputValue(decodeURI(textInput))
        }
        else {
            setOutputValue(encodeURI(textInput))
        }
    }

    const handleToggle = () => {
        setDecodeToggle(!decodeToggle);
        let temp = inputValue;
        setInputValue(outputValue);
        setOutputValue(temp);
    }

    return (<div>
        <h2>URL</h2>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
        <Toggle  onInputChange={handleToggle} title={decodeToggle ? 'Decode URL' : 'Encode URL'  } />
    </div>);
}