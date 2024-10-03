import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import yourReducer from "./yourSlice";

const store = configureStore({
    reducer: {
        data: yourReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
