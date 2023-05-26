import React, { useState } from 'react';
import { Input, Output } from './textfields';
import { Toggle } from './toggle';

export default function Uppercase() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [uppercase, setUppercase] = useState(true);

  const handleChange = (textInput) => {
    setInputValue(textInput);
    if (textInput != null && uppercase) {
      setOutputValue(textInput.toUpperCase());
    } else if (textInput != null && !uppercase) {
      setOutputValue(textInput.toLowerCase());
    }
  };

  const handleToggle = () => {
    setUppercase(!uppercase);
    const temp = inputValue;
    setInputValue(outputValue);
    setOutputValue(temp);
  };

  return (
    <div>
      <h2>Uppercase</h2>
      <Input onInputChange={handleChange} value={inputValue} />
      <Output value={outputValue} />
      <Toggle onInputChange={handleToggle} title={uppercase ? 'Uppercase' : 'Lowercase'} />
    </div>
  );
}
