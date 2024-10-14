import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Uppercase(props) {
    const upperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const lowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const onChanging = (event) => {
        setText(event.target.value);
    }

    const clearGap = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Enter text here</h1>
            </div>

            <div className="container mb-3">
                <textarea
                    style={{ borderRadius: '10px' }}
                    className="form-control"
                    rows="10"
                    value={text}
                    onChange={onChanging}
                />
            </div>

            <div style={{ marginTop: '5px' }} className="container">
                <button type="button" className="btn btn-dark px-3" onClick={upperCase}>UPPERCASE</button>
            </div>

            <div style={{ marginTop: '5px' }} className="container my-1">
                <button type="button" className="btn btn-dark my-1 px-3" onClick={clearGap}>Remove Extra Spaces</button>
            </div>

            <div className="container">
                <button type="button" className="btn btn-dark my-1" onClick={lowerCase}>LOWERCASE</button>
            </div>

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                {text.length} characters and {text.split(' ').filter((element) => { return element.length !== 0 }).length} words
            </div>

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                You can read this in {0.005 * (text.split(' ').length)} minutes
            </div>
        </>
    )
}
