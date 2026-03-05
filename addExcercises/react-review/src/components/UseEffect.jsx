import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => console.log(`Count change: ${count}`));

    // su dung useEffect de log ra count khi count thay doi 

    const increase = () => {    // tang bien count
        setCount(count + 1)

    }

    const decrease = () => { // giam bien count
        if (count > 0) {
            setCount(count - 1)

        }
    }

    const reset = () => { //reset count ve lai ban dau 
        setCount(0)

    }

    return (
        <div style={{ margin: 20 }}>
            <h2>Counter</h2>
            <h4>Count: {count}</h4>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseEffect;