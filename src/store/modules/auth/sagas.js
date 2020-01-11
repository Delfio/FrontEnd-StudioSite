import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }){
  try {
    const { email, senha } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      senha,
    });

    const { token, user } = response.data;

    yield put(signInSucess(token, user));

    yield history.push('/painel')

  } catch (err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
