import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';

import {toast} from 'react-toastify';

import pt from 'date-fns/locale/pt'
import format from 'date-fns/format'
import DatePicker from './DaterPicker';

import { Link } from 'react-router-dom';

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

  const { id } = props.match.params;

  const [evento, setEvento] = useState({})

  const [horas, setHoras] = useState({})

  useEffect(() => {
    async function loadEvento(){
      const response = await api.get(`eventos/${id}`)

      setEvento(response.data);

      const {data_evento} = response.data;


      const formatado = await new Date(Date.parse(data_evento))

      setHoras(format(formatado, "'Dia' dd 'de' MMMM'", {locale: pt}))
    }
    loadEvento();
  }, [])

  async function handleUpdate(data){
    await api.put(`eventos/${id}`, {
      ...data
    })
    toast.success('Evento Atualizado')
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Editar Evento</h1>
        <hr/>
        <h6>. Cadastre todas as informações e clique em "Confirmar" </h6>
        <h6>. Assim que cadastrado as informações envie as imagens </h6>
        <br/>
        <Form initialData={evento} schema={schema} onSubmit={handleUpdate}>
          <div className="col s12 hide-on-small-only">
          </div>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
          </div>
          <p>Data do evento:</p>
          <div className="col l12 s12">
            <p style={{fontWeight: '500', fontSize: 18}} className="red-text">{`Hora atual: ${horas}`}</p>
            <DatePicker name="data_evento" />
          </div>
          <div className="input-field col l12 s12">
            <Input name="phone_contato" id="phone_contato" type="number" className="validate" />
          </div>

          <div className="input-field col l12 s12">
            <Input name="email_contato" id="email_contato" type="email" className="validate" />
          </div>
          <div className="input-field col l12 s12">
            <Input name="responsavel" id="responsavel" type="text" className="validate" />
          </div>

          <div className="input-field col l12 s12">
            <Input multiline name="descricao" id="descricao" type="text" className="validate" />
          </div>
          <div style={{marginTop: 15}} className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>
        <br />
        <hr />
        <div className="row">
          <div className="col s12 center">
            <div className="col s6">
              <Link to="/allEventos">
                Todos os eventos
              </Link>
            </div>
            <div className="col s6">
              <Link to={`/novoEvento/${id}/files`}>
                Arquivos deste evento
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
