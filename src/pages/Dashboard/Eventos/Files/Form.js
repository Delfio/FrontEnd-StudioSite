import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import api from '../../../../services/api';

import Table from './Table';

const schema = Yup.object().shape({
  link: Yup.string()
    .url('Insira um link válido')
    .required('Insira um nome da atividade'),
  titulo: Yup.string().required('Insira uma descrição da atividade'),
  descricao: Yup.string(),
});

export default function FormEvento({ id }) {
  const [videos, setVideos] = useState([]);

  async function handleSubmitVideo(data) {
    await api.post(`eventos/${id}/video`, data);

    const response = await api.get(`eventos/${id}`);
    setVideos(response.data.videos);
    toast.success('Video enviado com sucesso');
  }
  return (
    <>
      <div className="col s12">
        <hr />
        <h4> Cadastrar videos </h4>
        <Form schema={schema} onSubmit={handleSubmitVideo}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Preencha os campos abaixo</h5>
          </div>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
            <label htmlFor="titulo">Titulo *</label>
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="descricao"
              id="descricao"
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="descricao">Descrição do video *</label>
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="link"
              id="link"
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="link">Link *</label>
          </div>
          <p className="red-text">
            ! Video de icorporação =
            'https://www.youtube.com/embed/66PrK9b_WD8?list=RDcRLSKh5ridA'
          </p>

          <div style={{ marginTop: 15 }} className="col s12">
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
      </div>
      <Table id={id} videos={videos} />
    </>
  );
}
