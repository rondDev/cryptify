import React, { useState } from 'react';
import { Input, Output } from './textfields';
import { Toggle } from './toggle';

function toHex(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

function fromHex(str) {
  const hex = str.toString();
  let result = '';
  for (let n = 0; n < hex.length; n += 2) {
    result += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return result;
}

export default function Hex() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [fromToggle, setFromToggle] = useState(false);

  const handleChange = (textInput) => {
    setInputValue(textInput);
    if (fromToggle) {
      setOutputValue(fromHex(textInput));
    } else {
      setOutputValue(toHex(textInput));
    }
  };

  const handleToggle = () => {
    setFromToggle(!fromToggle);
    const temp = inputValue;
    setInputValue(outputValue);
    setOutputValue(temp);
  };

  return (
    <div>
      <h2>Hex</h2>
      <Input onInputChange={handleChange} value={inputValue} />
      <Output value={outputValue} />
      <Toggle onInputChange={handleToggle} title={fromToggle ? 'Hex > Text' : 'Text > Hex'} />
    </div>
  );
}
