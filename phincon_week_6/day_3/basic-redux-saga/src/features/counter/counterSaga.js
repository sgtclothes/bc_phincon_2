import { takeEvery } from "redux-saga/effects";
import { incrementByAmount, decrementByAmount, decrement, increment } from "./counterSlice";

export default function* counterSaga() {
    yield takeEvery("counter/incrementByAmount", incrementByAmount);
    yield takeEvery("counter/decrementByAmount", decrementByAmount);
    yield takeEvery("counter/increment", increment);
    yield takeEvery("counter/decrement", decrement);
}
