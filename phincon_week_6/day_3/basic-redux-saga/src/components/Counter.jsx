import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div className="counter-page">
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
            <button onClick={() => dispatch({ type: "counter/incrementByAmount", payload: 5 })}>
                Increment by 5
            </button>
            <button onClick={() => dispatch({ type: "counter/decrementByAmount", payload: 10 })}>Decrement By 10</button>
        </div>
    );
};

export default Counter;
