import React, {useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import api from '../../../../services/api';

import Table from './Table';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('Insira um nome da atividade'),
  descricao: Yup.string()
    .required('Insira uma descrição da atividade'),
})

const schemaVideo = Yup.object().shape({
  titulo: Yup.string()
    .required('Insira um titulo para o video'),
  descricaoVideo: Yup.string(),
  link: Yup.string()
    .required('Insira um link para o video')
})

export default function Files({id}) {

  const [atividades, setAtividades] = useState([])
  const [videos, setVideos] = useState([])

  async function handleSubmit(data){
    const { nome, descricao } = data;

    if(nome || descricao){
      await api.post(`empresas/${id}/servico`, {
        nome,
        descricao,
      });
    }

    const response = await api.get(`empresas/${id}`);
    const empresa = response.data.Empresas[0]

    setAtividades(empresa.servicos)
  }

  async function handleSubmitVideo(data){
    await api.post(`empresas/${id}/video`, data)

    const response = await api.get(`empresas/${id}`);
    const empresa = response.data.Empresas[0]

    setVideos(empresa.videos)
  }

  return (
    <>
    <div className="row">
      <h4 className="center">Atividades Exercidas pela empresa</h4>
      <Form onSubmit={handleSubmit} schema={schema} className="row">
        <div className="col s12 hide-on-small-only">
          <h5 className="grey-text">Preencha os campos abaixo</h5>
        </div>
        <div className="input-field col l12 s12">
          <Input name="nome" id="nome" type="text" className="validate" />
          <label htmlFor="nome">Nome da atividade *</label>
        </div>
        <div className="input-field col l12 s12">
          <Input name="descricao" id="descricao" type="text" className="materialize-textarea" />
          <label htmlFor="descricao">Descrição da atividade *</label>
        </div>

        <div style={{marginTop: 15}} className="col s12">
          <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </Form>
      <br/>
      <div className="col s12">
        <hr/>
      </div>
      <h4 className="center">Videos relacionados a empresa</h4>
      <Form schema={schemaVideo} onSubmit={handleSubmitVideo}>
        <div className="col s12 hide-on-small-only">
          <h5 className="grey-text">Preencha os campos abaixo</h5>
        </div>
        <div className="input-field col l12 s12">
          <Input name="titulo" id="titulo" type="text" className="validate" />
          <label htmlFor="titulo">Titulo do Video *</label>
        </div>
        <div className="input-field col l12 s12">
          <Input name="descricaoVideo" id="descricaoVideo" type="text" className="materialize-textarea" />
          <label htmlFor="descricaoVideo">Descrição do video</label>
        </div>
        <div className="input-field col l12 s12">
          <Input name="link" id="link" type="text" className="materialize-textarea" />
          <label htmlFor="link">Links de videos *</label>
        </div>
        <div className="col s12">
          <p className="red-text"> ! Videos de incorporação do youtube = "https://www.youtube.com/embed/vFmGpD7DodI?list=RDMMTUDjbeCtBKI"</p>
        </div>
        <div style={{marginTop: 15}} className="col s12">
          <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </Form>

    </div>

    <Table id={id} atividades={atividades} videos={videos}/>
    </>
  );
}
