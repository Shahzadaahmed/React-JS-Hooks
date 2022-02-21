// Note: Home component...!

import React, { useMemo, useState } from 'react';

const Home = () => {

    // Note: Handeling states here...!
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    // Note: Function to tacker performancce issue...! NOTE: This one is affecting the performance...!
    // const performanceHnadler = () => {
    //     console.log('Multiple counts function is running!');
    //     return count * 5;
    // };

    // Note: Function to tacker performancce issue...! NOTE: This one is not affecting the performance...!
    const performanceHnadler = useMemo(() => {
        console.log('Multiple counts function is running!');
        return count * 5;
    }, [count]);

    return (
        <React.Fragment>
            <h1> Learning useMemo hook in React JS </h1>

            <h2> {`Count: ${count}`} </h2>
            <button onClick={() => setCount(count + 1)}> Update Count </button>

            {/* <h2> {`Multiple counts: ${performanceHnadler()}`} </h2> */}
            <h2> {`Multiple counts: ${performanceHnadler}`} </h2>

            <h2> {`Items: ${item}`} </h2>
            <button onClick={() => setItem(item + 5)}> Update Item </button>
        </React.Fragment>
    );
};

export default Home;