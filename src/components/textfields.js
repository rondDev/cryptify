import React, { useState } from "react";

export function Input(props) {

    const handleChange = (event) => {
        props.onInputChange(event.target.value);
    }

    return (<div>
        <h3>Input</h3>
        <textarea onChange={handleChange} value={props.value}></textarea>
    </div>)
}

export function Output(props) {
    return (<div>
        <h3>Output</h3>
        <textarea readOnly={true} value={props.value}></textarea>
    </div>)
}