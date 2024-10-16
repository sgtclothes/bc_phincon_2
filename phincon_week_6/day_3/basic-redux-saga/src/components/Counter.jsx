import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div className="counter-page">
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch({ type: "counter/incrementAsync", payload: 5 })}>
                Increment Async by 5
            </button>
        </div>
    );
};

export default Counter;
