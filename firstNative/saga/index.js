import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
const promise = timeout =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ succeed: "ok" });
    }, timeout);
  });
function* fetchUser(action) {
  try {
    const user = yield call(promise, 1000);
    yield put({type:'test',key:action.key})
    console.log(action.key);
  } catch (e) {}
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
