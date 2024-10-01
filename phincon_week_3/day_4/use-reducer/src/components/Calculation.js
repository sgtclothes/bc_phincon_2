import { useState, useMemo, useEffect } from "react";

const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

const Calculation = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };
    useEffect(() => {
        console.log("RENDERING...");
    });

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
            </div>
        </div>
    );
};

export default Calculation;
