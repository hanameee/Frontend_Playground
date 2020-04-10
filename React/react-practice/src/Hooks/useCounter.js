import { useState } from "react";

const useCount = offset => {
    const [count, setCount] = useState();
    const increaseCount = () => {
        setCount(count + offset);
    };
    const decreaseCount = () => {
        setCount(count - offset);
    };
    return {
        count,
        increaseCount,
        decreaseCount
    };
};

export default useCount;
