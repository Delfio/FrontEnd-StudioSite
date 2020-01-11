import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify'

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
    toast.error('Erro, Verifique seus dados')
  }
}

export function* signUp({payload}){
  try {
    const {username, phone, email, password} = payload;

    yield call(api.post, '/users', {
      username,
      phone,
      email,
      password
    });

    yield history.push('/entrar')
    toast.success('Cadastro realizado com sucesso!')
  } catch (err) {
    toast.error('Erro, Falha no Cadastro')
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
