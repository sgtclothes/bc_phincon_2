import "./App.css";
import { useEffect, useReducer } from "react";

const data = {
    users: [
        { id: 1, name: "Sigit", present: false },
        { id: 2, name: "Rifqi", present: false },
        { id: 3, name: "Reza", present: false },
    ],
    todos: [
        {
            id: 1,
            title: "Sarapan",
            complete: false,
        },
        {
            id: 2,
            title: "Jogging",
            complete: false,
        },
        {
            id: 3,
            title: "Ngerjain Assigment",
            complete: false,
        },
    ],
    pokemons: [
        { name: "bulbasaur", url: "https://pokeapi.co" },
        { name: "charmander", url: "https://pokeapi.co" },
        { name: "squirtle", url: "https://pokeapi.co" },
    ],
};

const initialTodos = [
    {
        id: 1,
        title: "Sarapan",
        complete: true,
    },
    {
        id: 2,
        title: "Jogging",
        complete: true,
    },
    {
        id: 3,
        title: "Ngerjain Assigment",
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const reducerData = (state, action) => {
    switch (action.type) {
        case "UPDATE ALL USER PRESENT TO TRUE":
            return state.users.map((user) => {
                return { ...user, present: true };
            });
        case "UPDATE USER PRESENT":
            return state.users.map((user) => {
                if (action.id === user.id) {
                    return { ...user, present: !user.present };
                } else {
                    return user;
                }
            });
        case "UPDATE TODO CHECKLIST":
            return state.todos.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function App() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleChecklist = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
        console.log("INI STATE DARI REDUCER :", todos);
    };
    useEffect(() => {
        console.log("INI STATE KERENDER ULANG : ", todos);
    }, [todos]);
    return (
        <div>
        </div>
    );
}

export default App;
