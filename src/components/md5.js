import React, { useState } from "react";
import md5 from "js-md5";
import { Input, Output } from "./textfields";

export default function Md5() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleChange = (textInput) => {
        setInputValue(textInput);
        setOutputValue(md5(textInput));
    }

    return (<div>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
    </div>);
}