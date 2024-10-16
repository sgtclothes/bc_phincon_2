import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchRequest, fetchSuccess, fetchFailure } = pokemonSlice.actions;
export default pokemonSlice.reducer;
