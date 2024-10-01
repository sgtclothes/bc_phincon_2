import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoLists = () => {
    const space = {
        margin: "5px",
    };
    const { todoLists } = useSelector((state) => state.todo);
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodo = () => {
        const newId = todoLists.length + 1;
        let data = {
            id: newId,
            title: todo,
            active: false,
        };
        todoLists.push(data);
        dispatch({ type: "ADD TODO", payload: todoLists });
    };

    const addTodoViaDOM = () => {
        const container = document.getElementById("container");
        let html = `<li key={todoList.id}>
                        <input type="checkbox" disabled={todoList.active} />
                        <label>{todoList.title}</label>
                    </li>`;
        container.insertAdjacentHTML("beforeend", html);
    };

    useEffect(() => {
        console.log(todoLists);
    }, []);
    return (
        <>
            <ul id="container">
                {todoLists.map((todoList) => (
                    <li key={todoList.id}>
                        <input type="checkbox" disabled={todoList.active} />
                        <label>{todoList.title}</label>
                    </li>
                ))}
            </ul>
            <input style={space} type="input" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button style={space} onClick={addTodo}>
                Add to do
            </button>
            <button onClick={addTodoViaDOM}>Add to do via DOM</button>
        </>
    );
};

export default TodoLists;
