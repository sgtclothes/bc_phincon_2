let initialState = {
    todoLists: [
        {
            id: 1,
            title: "Breakfast",
            active: false,
        },
        {
            id: 2,
            title: "Lunch",
            active: false,
        },
        {
            id: 3,
            title: "Dinner",
            active: false,
        },
    ],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD TODO":
            return {
                ...state,
                todoLists: action.payload,
            };
        default:
            return state;
    }
};

export default todoReducer;
