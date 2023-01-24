import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';

function* fetchUser() {
  try {
    console.log('in fetch user saga');
    const response = yield axios.get('/user');
    yield put({ type: 'SET_USER', payload: response.data });
    console.log(response.data);

  } catch (error) {
    console.log('User GET request failed', error);
  };
};

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
