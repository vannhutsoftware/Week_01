import { useReducer, useState } from "react";


// khoi tao trang thai ban dau state.count = 0
const initialState = { count: 0 }

// ham nhan vao state + action tra ve state moi
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }; // tra ve state moi tang 1
        case "decrement":
            return { count: state.count - 1 }; // tra ve state moi giam 1
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ margin: 30 }}>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        </div>
    )

    // khi click dispatch gui action -> reducer chay -> state moi duoc cap nhat
}


export default Counter