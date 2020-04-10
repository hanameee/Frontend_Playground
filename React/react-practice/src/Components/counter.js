import React, { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const increaseBy = offset => setValue(value + offset);
    const decreaseBy = offset => setValue(value - offset);
    return (
        <div>
            <p>COUNTER: {value}</p>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => decreaseBy(1)}>-1</button>
        </div>
    );
};

export default Counter;
