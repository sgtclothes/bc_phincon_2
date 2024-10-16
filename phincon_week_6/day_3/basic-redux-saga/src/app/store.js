import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import counterSaga from "../features/counter/counterSaga";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import pokemonSaga from "../features/pokemon/pokemonSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemon: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

[counterSaga, pokemonSaga].map((saga) => {
    sagaMiddleware.run(saga);
});
