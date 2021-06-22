import { useState } from 'react';

const ComponentWithUseState = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <p>{count}</p>
            <button onClick={incrementCount}>
                Increment
            </button>
        </div>
    );
};

export default ComponentWithUseState;
