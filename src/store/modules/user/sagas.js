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

    yield history.push(`/novaEmpresa/${id}/files`)

  } catch (err) {
    toast.error('Erro, Não foi possivel cadastrar a empresa')

  }
}

export function* cadastroNoticia({payload}){
  try{
    const {
      titulo,
      brev_descricao,
      descricao,
      tipo
    } = payload.data;

    const response = yield call(api.post, '/noticias', {
      titulo,
      brev_descricao,
      descricao,
      tipo
    })

    const { id } = response.data

    yield history.push(`/novaNews/${id}/files`)

  }catch(err){
    toast.error('Erro, Não foi possivel cadastrar a notícia')

  }
}

export function* cadastroEvento({payload}){
  try{

    const {
      titulo,
      descricao,
      phone_contato,
      email_contato,
      responsavel,
      data_evento,
    } = payload.data;

    const response = yield call(api.post, '/eventos', {
      titulo,
      descricao,
      phone_contato,
      email_contato,
      responsavel,
      data_evento,
    });

    const { id } = response.data;

    console.log(response.data)

    toast.success('Evento cadastrado com sucesso!')

    if(id){
      yield history.push(`/novoEvento/${id}/files`)
    }

  }catch(err){
    toast.error('Não foi possivel cadastrar, verifique os dados')
  }
}

export function* cadastroEmpresaDestaque({payload}){
  try{
    const {
      nome,
      descricao,
      fone_contato,
      fone_contato2,
      email_contato,
      endereco
    } = payload.data;

    const response = yield call(api.post, '/empresaDestaque', {
      nome,
      descricao,
      fone_contato,
      fone_contato2,
      email_contato,
      endereco,
    })

    const { id } = response.data

    yield history.push(`/novaEmpresaDestaque/${id}/files`)
    toast.success('Empresa Cadastrada com sucesso!')

  } catch (err) {
    toast.error('Erro, Não foi possivel cadastrar a empresa')

  }
}

export function* cadastroInfoPrincipal({ payload }){
  try{
    const {
      titulo,
      empresa,
      descricao,
      tipo,
      telefone
    } = payload.data;

    const response = yield call(api.post, '/principal', {
      titulo,
      empresa,
      descricao,
      tipo,
      telefone
    })

    const { id } = response.data

    yield history.push(`/newPrincipal/${id}/files`)
    toast.success('Conteudo cadastrado com sucesso')

  }catch(err){
    toast.error('Erro, Não foi possivel cadastrar o conteúdo')

  }
}

export default all([

  takeLatest('@user/CADASTRO_CLASSIFICADO_REQUEST', cadastroClassificado),
  takeLatest('@user/CADASTRO_EMPRESA_REQUEST', cadastroEmpresa),
  takeLatest('@user/CADASTRO_NOTICIA_REQUEST', cadastroNoticia),
  takeLatest('@user/CADASTRO_EVENTO_REQUEST', cadastroEvento),
  takeLatest('@user/CADASTRO_EMPRESA_DESTAQUE_REQUEST', cadastroEmpresaDestaque),
  takeLatest('@user/CADASTRO_INFO_PRINCIPAL_REQUEST', cadastroInfoPrincipal),
]);
