import React, { useState } from 'react';

function StateExample() {
    const [count, setCount] = useState(0);
    let normalCount = 0; // Normal variable

    const increment = () => {
        setCount(count + 1); // Updates state
        normalCount += 1; // Updates normal variable
        console.log('Normal Count:', normalCount); // Logs the normal variable
    };

    return (
        <div>
            <h1>State & useState Example</h1>
            <p>Current count (state): {count}</p>
            <p>Normal count (does not update): {normalCount}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default StateExample;