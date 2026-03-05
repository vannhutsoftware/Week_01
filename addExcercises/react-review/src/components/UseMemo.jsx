import { useMemo, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);

    const isEven = useMemo(() => {
        console.log(`Checking ${count}`);
        return count % 2 === 0;
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>{isEven ? "Even" : "Odd"}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default Example 