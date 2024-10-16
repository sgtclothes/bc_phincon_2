import { put, takeLatest } from "redux-saga/effects";
import { fetchRequest, fetchSuccess, fetchFailure } from "./pokemonSlice";

const POKEMON_API = import.meta.env.VITE_POKEMON_API_URL;

async function fetchData() {
    const response = await fetch(`${POKEMON_API}/pokemon`);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return await response.json();
}

function* fetchAPI() {
    try {
        const response = yield fetchData();
        yield put(fetchSuccess(response));
    } catch (error) {
        yield put(fetchFailure(error.message));
    }
}

export default function* pokemonSaga() {
    yield takeLatest(fetchRequest.type, fetchAPI);
}
