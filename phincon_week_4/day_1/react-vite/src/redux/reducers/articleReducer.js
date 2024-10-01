const initialState = {
    articles: {},
};
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET ALL ARTICLES":
            return {
                ...state,
                articles: action.payload
            }
        default:
            return state;
    }
};

export default articleReducer;
