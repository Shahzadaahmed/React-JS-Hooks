// Note: HelloWorld component...!

import React from 'react';
import Typed from 'react-typed';
import "./style.css";

let sentences = [
    "My name is Muhammad Ahmed Rana!",
    "I am a React Stack Developer!",
    "This is a Hello World App!",
    "I hope you like it!",
    "You have a nice day!"
];

const HelloWorld = () => {
    return (
        <React.Fragment>
            <div id='container'>
                <Typed
                    strings={sentences}
                    typeSpeed={60}
                    backSpeed={60}
                    loop={Infinity}
                >
                    <h1 id='animation_heading'></h1>
                </Typed>
            </div>
        </React.Fragment>
    );
}

export default HelloWorld;