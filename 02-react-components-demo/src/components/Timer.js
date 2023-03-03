import React, { useDebugValue } from 'react';


const Timer = (props) => {

    const stateResult = React.useState();

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