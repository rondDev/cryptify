import React, { useState } from "react";
import { Input, Output } from "./textfields";
import { Toggle } from "./toggle";

export default function Hex() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [fromToggle, setFromToggle] = useState(false);

    const handleChange = (textInput) => {
        setInputValue(textInput);
        if(fromToggle) {
            setOutputValue(fromHex(textInput));
        }
        else {
            setOutputValue(toHex(textInput));
        }
    }

    

    const handleToggle = () => {
        setFromToggle(!fromToggle);
        let temp = inputValue;
        setInputValue(outputValue);
        setOutputValue(temp);
    }

    return (<div>
        <h2>Hex</h2>
        <Input onInputChange={handleChange} value={inputValue} />
        <Output value={outputValue} />
        <Toggle onInputChange={handleToggle} title={fromToggle ? 'Hex > Text' : 'Text > Hex'} />
    </div>);
}

  function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

  function fromHex(str)
 {
    var hex  = str.toString();
	var result = '';
	for (var n = 0; n < hex.length; n += 2) {
		result += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return result;
 }