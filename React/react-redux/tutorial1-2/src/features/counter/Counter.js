import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
    // React-Redux 라이브러리가 제공하는 useSelector hook - redux store state에서 컴포넌트가 필요한 부분을 뽑아올 수 있게 해준다.
    const count = useSelector(selectCount);
    // 마찬가지로 React-Redux 라이브러리가 제공하는 useDispatch hook - action을 dispatch 할 수 있게 해준다.
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(
                            incrementByAmount(Number(incrementAmount) || 0)
                        )
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() =>
                        dispatch(incrementAsync(Number(incrementAmount) || 0))
                    }
                >
                    Add Async
                </button>
            </div>
        </div>
    );
}
