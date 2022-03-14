// Note: Timer component...!

import React, { useState, useEffect, Fragment } from 'react';
let timeInterval;

const Timer = () => {

    // Note: Handeling states here...!
    const [count, setCount] = useState(30);
    const [hasTimerStarted, setHasTimerStarted] = useState(false);

    // Note: Function to handle timer...!
    const handleTimer = () => {
        setHasTimerStarted(true);
        let countsClone = count;

        timeInterval = setInterval(() => {
            if (countsClone > 0) {
                countsClone--;
                setCount(countsClone);
            }

            else {
                console.log('Timer stopped!');
                clearInterval(timeInterval);
                setHasTimerStarted(false);
            }
        }, 1000);
    };

    // Note: When this component mounted then this hook will run...!
    useEffect(() => handleTimer(), []);

    // Note: When this component mounted then this hook will run...!
    useEffect(() => {
        if (!hasTimerStarted) setCount(30);
    }, [hasTimerStarted]);

    // Note: Function to reset timer...!
    const resetTimer = () => {
        handleTimer();
    };

    return (
        <Fragment>
            <div>
                <h1> Timer in React JS! </h1>
                <h2> {(hasTimerStarted) ? (count) : (0)} </h2>
                <button onClick={resetTimer}> Reset Timer </button>
            </div>
        </Fragment>
    );
};
export default Timer;