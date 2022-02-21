// Note: Contact component...!

import React, { useRef } from 'react';

const Contact = () => {

    // Note: Making refrence...!
    const inputRef = useRef(null);

    // Note: Function to handle input...!
    const handleInput = () => {
        console.log(inputRef);
        // console.log(inputRef.current.value);
        // inputRef.current.focus();
        // inputRef.current.style.color = "red";
        // inputRef.current.style.display = "none";
    };

    return (
        <React.Fragment>
            <div>
                <h1> Learning useRef in React JS </h1>
                <input
                    type={'text'}
                    ref={inputRef}
                />

                <button onClick={handleInput}> Input Handler </button>
            </div>
        </React.Fragment>
    );
}

export default Contact;