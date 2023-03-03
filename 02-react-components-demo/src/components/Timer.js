import React, { useDebugValue } from 'react';


const Timer = (props) => {

    const [seconds, setSeconds] = React.useState(0);

    // useState returns an array with two elements - value and function (can have custom names)
    // useState needs an initial value
    // stateResult[0] -> value 
    // stateResult[1] -> function

    setTimeout(() => {
        setSeconds(seconds + 1)
    }, 1000)

    return (
        <div>
            Time: {seconds}s
        </div>
    )
};

export default Timer;