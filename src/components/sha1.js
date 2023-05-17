import React, { useState } from "react";
import sha1 from "js-sha1";
import { Input, Output } from "./textfields";

export default function Sha1() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleChange = (textInput) => {
        setInputValue(textInput);
        setOutputValue(sha1(textInput));
    }

    return (<div>
        <h2>SHA1</h2>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}