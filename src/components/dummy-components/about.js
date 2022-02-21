// Note: About component...!

import React, { useMemo, useState } from 'react';

const About = () => {

    // Note: Handeling states here...!
    const [count, setCount] = useState(0);

    // Note: NoRender component...!
    const noRender = useMemo(() => {
        return (
            <div>
                <h2> Welcome to about component! </h2>
                <h2> {`Counts: ${count}`} </h2>
            </div>
        );
    }, []);

    return (
        <React.Fragment>
            <h1> Another example of useMemo() hook </h1>

            {noRender}

            <div>
                <h2> Welcome to about component! </h2>
                <h2> {`Counts: ${count}`} </h2>
            </div>

            <button onClick={() => setCount(count + 1)}> Update Count </button>
        </React.Fragment>
    );
};

export default About;