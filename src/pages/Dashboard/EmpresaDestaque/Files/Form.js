import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import api from '../../../../services/api';

import Table from './Table';

const schema = Yup.object().shape({
  titulo: Yup.string().required('Insira um titulo para o video'),
  descricao: Yup.string(),
  link: Yup.string()
    .url('Insira um link correto')
    .required('Insira um link para o video'),
});

export default function Forms({ id }) {
  const [videos, setVideos] = useState([]);

  async function handleSubmitVideo(data) {
    await api.post(`empresaDestaque/${id}/video`, data);

    const response = await api.get(`empresaDestaque/${id}`);

    setVideos(response.data.videos);
    toast.success('Video enviado com sucesso');
  }

  return (
    <>
      <div className="row">
        <h4 className="center">Videos relacionados a empresa</h4>
        <Form schema={schema} onSubmit={handleSubmitVideo}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Preencha os campos abaixo</h5>
          </div>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
            <label htmlFor="titulo">Titulo do Video *</label>
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="descricao"
              id="descricao"
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="descricao">Descrição do video</label>
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="link"
              id="link"
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="link">Links de videos *</label>
          </div>
          <div className="col s12">
            <p className="red-text">
              {' '}
              ! Videos de incorporação do youtube =
              "https://www.youtube.com/embed/vFmGpD7DodI?list=RDMMTUDjbeCtBKI"
            </p>
          </div>
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
