import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import { toast } from 'react-toastify'

import { cadastroClassificadoSuccess, cadastroClassificadoFailure } from './actions';

export function* cadastroClassificado({ payload }) {
  try{

    const { titulo, descricao, fone_contato, preco } = payload.data;

    const response = yield call(api.post, '/classificados', {
      titulo,
      descricao,
      fone_contato,
      preco
    })

    const { id, user_id } = response.data

    yield put(cadastroClassificadoSuccess(id))

    yield history.push(`/postClassificado/${id}/${user_id}`)

  } catch (err) {
    yield put(cadastroClassificadoFailure());
    toast.error('Erro, Não foi possivel cadastrar o classificado')
  }

}

export function* cadastroEmpresa({payload}){
  try{
    const {
      nome,
      descricao,
      fone_contato,
      fone_contato2,
      email_contato,
      endereco,
      destaque,
    } = payload.data;

    const response = yield call(api.post, '/empresas', {
      nome,
      descricao,
      fone_contato,
      fone_contato2,
      email_contato,
      endereco,
      destaque,
    })

    const { id } = response.data

    console.log(response.data);

    yield history.push(`/novaEmpresa/${id}/files`)

  } catch (err) {

  }
}

export default all([

  takeLatest('@user/CADASTRO_CLASSIFICADO_REQUEST', cadastroClassificado),
  takeLatest('@user/CADASTRO_EMPRESA_REQUEST', cadastroEmpresa)
]);
