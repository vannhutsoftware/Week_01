import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0)

    const increase = () => {    // tang bien count
        setCount(count + 1)
        console.log(`Count is: ${count}`);
        // react khong cap nhat count lien sau khi setCount -> log ra man hinh state cu
        // --> su dung useEffect de khac phuc 

    }

    const decrease = () => { // giam bien count
        if (count > 0) {
            setCount(count - 1)
            console.log(`Count is: ${count}`);
        }
    }

    const reset = () => { //reset count ve lai ban dau 
        setCount(0)
        console.log(`Count is: ${count}`);
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

export default UseState;