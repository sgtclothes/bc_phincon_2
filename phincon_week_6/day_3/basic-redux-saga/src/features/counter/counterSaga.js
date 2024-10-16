import { takeEvery, put, delay } from "redux-saga/effects";
import { incrementByAmount } from "./counterSlice";

function* incrementAsync(action) {
    yield delay(1000);
    yield put(incrementByAmount(action.payload));
}

export default function* counterSaga() {
    yield takeEvery("counter/incrementAsync", incrementAsync);
}
