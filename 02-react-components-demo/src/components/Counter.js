import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'Counter1';
        case 2: 
            return 'Counter2';
        case 3:
            return 'Counter3';
        case 4:
            return 'LastCounter'
        default:
            return 'Counter';
    }
}

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

    const title = getTitle(counter);

    return (
        <div>

            <h3>{counter > 3 ? 'Last Counter' : getTitle(counter)}: {counter}</h3>
            <button onClick={incrementCounterHandler}>+</button>
            <button onClick={decrementCounterHandler}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>

        </div>
    )
};

export default Counter;

