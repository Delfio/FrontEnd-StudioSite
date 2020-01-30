import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';

import { cadastroClassificadoRequest } from '../../../store/modules/user/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  titulo: Yup.string().required('O titulo é obrigatório'),
  descricao: Yup.string().required('Favor insira uma descrição'),
  fone_contato: Yup.string()
    .required('Favor insira uma descrição')
    .min(6, 'Favor insira no minimo 6 dígitos')
    .max(9, 'Maximo de 9 digitos Não insira o (69)'),
  preco: Yup.string()
    .required('Insira um preço')
    .min(2, 'Mínimo de 2 dígitos')
    .max(7, 'Maximo de 7 digitos'),
});

export default function Classificados() {
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    await dispatch(cadastroClassificadoRequest(data));
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="header red-text"> Novo classificado </h1>
        <hr />
        <h6>1. Insira os campos e clique em "Confirmar"</h6>
        <h6>2. Selecione as imagens desejadas</h6>
        <h6>3. Aguarde a aprovação do seu anúncio</h6>
        <br />
        <Form schema={schema} className="row" onSubmit={handleSubmit}>
          <div className="col s12 hide-on-small-only">
            <h4 className="grey-text">Preencha os campos abaixo</h4>
          </div>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
            <label htmlFor="titulo">Titulo do anuncio</label>
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="descricao"
              id="titulo"
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="titulo">Descrição do seu anuncio</label>
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="fone_contato"
              id="fone"
              type="number"
              min="6"
              className="validate"
            />
            <label htmlFor="fone">Fone para contato</label>
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="preco"
              id="price"
              type="number"
              className="validate"
              min="0.00"
              max="10000.00"
              step="0.01"
            />
            <label htmlFor="price">Preço: "55.00"</label>
          </div>
          <div className="col s12">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Confirmar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>
        <br />
        <h6>
          {' '}
          * Antes de tudo, para criar um anúncio classificado eficiente que dá
          bons resultados de marketing é preciso seguir algumas dicas. Uma delas
          é incluir, uma boa imagem, chamativa e que dê uma ideia o mais exata
          possível a respeito da oferta.{' '}
        </h6>
        <h6>
          {' '}
          * Deixar seu contato é imprescindível para que o interessado entre em
          contato e possa fazer negócio.{' '}
        </h6>
        <h6>
          {' '}
          * Todo anúncio classificado deve conter, além da imagem, informações
          do anúncio, informações de contato e o mais importante… palavras
          chave. Isso, aliado a um bom serviço de classificados, pode auxiliar
          sim, qualquer empresa a vender mais e conquistar mais clientes.{' '}
        </h6>
      </Container>
    </div>
  );
}
