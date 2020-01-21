import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import api from '../../../services/api';

import { useDispatch, useSelector } from 'react-redux';
import {cadatroEventoRequest} from '../../../store/modules/user/actions'

import DatePicker from './DaterPicker';
import { Container } from './styles';


const schema = Yup.object().shape({
  titulo: Yup.string()
    .required('Insira um titulo da notícia'),
  descricao: Yup.string()
    .required('Insira uma breve descrição')
    .min(25, 'Minimo de 30 caracteres'),
  phone_contato: Yup.string()
    .max(11, 'Maximo de 11 números'),
  email_contato: Yup.string()
    .email('Insira um e-mail válido'),
  responsavel: Yup.string(),
  data_evento: Yup.date()
    .required('Favor insira a data do evento')
})

export default function Eventos(props) {
  const dispatch = useDispatch();

  async function handleSubmit(data){
    await dispatch(cadatroEventoRequest(data))
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Cadastrar Novo Evento</h1>
        <hr/>
        <h6>. Cadastre todas as informações e clique em "Confirmar" </h6>
        <h6>. Assim que cadastrado as informações envie as imagens </h6>
        <br/>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Preencha os campos abaixo</h5>
          </div>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
            <label htmlFor="titulo">Titulo do Evento *</label>
          </div>
          <p>Data do evento:</p>
          <div className="col l12 s12">
            <DatePicker name="data_evento" />
          </div>
          <div className="input-field col l12 s12">
            <Input name="phone_contato" id="phone_contato" type="number" className="validate" />
            <label htmlFor="phone_contato">Fone de contato</label>
          </div>

          <div className="input-field col l12 s12">
            <Input name="email_contato" id="email_contato" type="email" className="validate" />
            <label htmlFor="email_contato">Email de contato</label>
          </div>
          <div className="input-field col l12 s12">
            <Input name="responsavel" id="responsavel" type="text" className="validate" />
            <label htmlFor="responsavel">Responsavel</label>
          </div>

          <div className="input-field col l12 s12">
            <Input multiline name="descricao" id="descricao" type="text" className="validate" />
            <label htmlFor="descricao">Descrição do evento *</label>
          </div>
          <div style={{marginTop: 15}} className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>

      </Container>
    </div>
  );
}
