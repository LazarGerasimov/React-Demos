import React, { useDebugValue } from 'react';


const Timer = (props) => {

    const [seconds, setSeconds] = React.useState();

    // useState returns an array with two elements - value and function (can have custom names)
    // stateResult[0] -> value 
    // stateResult[1] -> function

    setTimeout(() => {
        
    }, 1000)

    return (
        <div>
            Time: {props.start}s
        </div>
    )
};

export default Timer;