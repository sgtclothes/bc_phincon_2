import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
import articleReducer from "./reducers/articleReducer";

const rootReducers = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    article: articleReducer,
});

const store = createStore(rootReducers);

export default store;
