import React, { useState } from "react";

export function Input(props) {

    const handleChange = (event) => {
        props.onInputChange(event.target.value);
    }

    return (<div>
        <textarea onChange={handleChange} value={props.value}></textarea>
    </div>)
}

export function Output(props) {
    return (<div>
        <textarea readOnly={true} value={props.value}></textarea>
    </div>)
}