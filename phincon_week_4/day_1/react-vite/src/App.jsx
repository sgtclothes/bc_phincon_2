import { useDispatch, useSelector } from "react-redux";
import TodoLists from "./components/TodoLists";
import Articles from "./components/Articles";
const App = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Counter: {count}</h1>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            </div>
            <TodoLists />
            <Articles />
        </>
    );
};

export default App;
