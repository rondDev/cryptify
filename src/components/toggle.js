import React, { useState } from "react";

export function Toggle(props) {

    const handleChange = () => {
                props.onInputChange();

    }

    return (<div className="toggleDiv">
        <label className="switch"><input type="checkbox" onChange={handleChange}></input><span class="slider round"></span></label>
        <p className="toggleText">{props.title}</p>
    </div>)
}

// <span className="slider round"></span>