import React, { useState } from "react";
import Counter from "./Components/counter";
import Info from "./Components/info";

function App() {
    const [visible, setVisible] = useState(true);
    const toggleVisible = () => {
        setVisible(!visible);
    };
    return (
        <div className="App">
            <Counter />
            <button onClick={toggleVisible}>
                {visible ? "Hide" : "Show"} Info
            </button>
            {visible && <Info />}
        </div>
    );
}

export default App;
