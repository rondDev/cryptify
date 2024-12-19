import React from "react";

export function Toggle(props) {
    const handleChange = () => {
        props.onInputChange();
    };

    return (
        <div className="toggleDiv">
            <label className="switch" htmlFor="changeCheckbox">
                <input
                    id="changeCheckbox"
                    type="checkbox"
                    onChange={handleChange}
                />
                <span className="slider round" />
            </label>
            <p className="toggleText">{props.title}</p>
        </div>
    );
}

// <span className='slider round'></span>
