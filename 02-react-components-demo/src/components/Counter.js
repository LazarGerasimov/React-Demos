import { useState } from "react";


const Counter = (props) => {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button>+</button>
        </div>
    )
};

export default Counter;

