import { useCallback, useEffect, useRef, useState } from "react";
import IncrementButton from "./IncrementButton";



// UseCallback
function RenderCount() {
    const [count, setCount] = useState(0);

    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1
    })

    const handleIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <p>RenderCount render: {renderCount.current}</p>

            <IncrementButton onIncrement={handleIncrement} />
        </div>
    );
}

export default RenderCount;
