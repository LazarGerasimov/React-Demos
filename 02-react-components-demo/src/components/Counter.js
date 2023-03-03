import { useState } from "react";


const Counter = (props) => {

    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = (e) => {
        setCounter(oldCounter => oldCounter + 1);
    }

    const decrementCounterHandler = (e) => {
        setCounter(oldCounter => oldCounter - 1);
    }

    const clearCounterHandler = (e) => {
        setCounter(0);
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={incrementCounterHandler}>+</button>
            <button onClick={decrementCounterHandler}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>

        </div>
    )
};

export default Counter;

