import React, { useDebugValue } from 'react';
// import { useState } from 'react';


const Timer = (props) => {

    const [seconds, setSeconds] = React.useState(props.start);
    // const [seconds, setSeconds] = useState(props.start);  -- if just useState is imported

    // useState returns an array with two elements - value and function (can have custom names)
    // useState needs an initial value
    // stateResult[0] -> value 
    // stateResult[1] -> function

    setTimeout(() => {
        // setSeconds(seconds + 1)
        if (seconds >= 6) {
            setSeconds(0);
        } else {
            setSeconds(state => state + 1)
        }
    }, 1000)

    return (
        <div>
            Time: {seconds}s
        </div>
    )
};

export default Timer;