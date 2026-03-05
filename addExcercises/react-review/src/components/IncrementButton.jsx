import React, { useEffect, useRef } from "react";


// Child Component in useCallback

function IncrementButton({ onIncrement }) {
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    })
    console.log("Button render");

    return (
        <button onClick={onIncrement}>
            Increment
        </button>
    );
}

export default React.memo(IncrementButton);
