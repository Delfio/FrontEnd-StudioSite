import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import {toast} from 'react-toastify';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { Container } from './styles';

export default function EditarVideo(props) {

  const { id } = props.match.params;
  const { video_id } = props.match.params;

  const [video, setVideo] = useState({});

  useEffect(() => {
    async function load() {
      const response = await api.get(`eventos/${id}`);
      const empresa = response.data;
      const {videos} = empresa;

      videos.map(el => {
        if(el.id == video_id){
          setVideo(el)
        }
      })
    }
    load();
  }, [])


  async function handleSubmit(data){
    const response = await api.put(`eventos/${id}/video/${video_id}`, data);

    setVideo(response.data);

    toast.success('Video Alterado com sucesso!')
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Editar o seu vídeo</h1>
        <hr/>
        <br/>
        <div className="video-container">
          <iframe width="853" height="480" src={video.link} frameborder="0" allowfullscreen></iframe>
        </div>
        <br/>
        <Form onSubmit={handleSubmit} initialData={video}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Preencha os campos abaixo</h5>
          </div>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
          </div>
          <div className="input-field col l12 s12">
            <Input name="descricao" id="descricao" type="text" className="materialize-textarea" />
          </div>
          <div className="input-field col l12 s12">
            <Input name="link" id="link" type="text" className="materialize-textarea" />
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
        <br/>
        <div className="col s12">
          <Link to={`/novoEvento/${id}/files`}>
            Voltar
          </Link>
        </div>
        <br/>
      </Container>
    </div>
  );
}
