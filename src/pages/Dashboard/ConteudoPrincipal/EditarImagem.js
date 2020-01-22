import React, {useEffect, useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

import api from '../../../services/api';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function EditarImagemEvento(props) {

  const [imagem, setImagem] = useState({});

  const { id } = props.match.params;
  const { imagem_id } = props.match.params;

  useEffect(() =>{
    async function loadImages() {
      const response = await api.get(`principal/${id}`)
      const {imagens} = response.data;

      imagens.map(el => {
        if(el.id == imagem_id){
          setImagem(el)
        }
      })
    }
    loadImages();
  }, [])

  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData()
    body.append('fileField', file)

    const data = new FormData()

    data.append('imagem_principal', file);
    const response = await api.put(`principal/${id}/imagem/${imagem_id}`, data);
    setImagem(response.data)

    return { url: 'https://httpbin.org/post', body }
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="header red-text"> Editar Imagem </h1>
        <hr/>
        <br/>

        <div className="row">
          <div className="col s12">
            <img src={imagem.url} alt={imagem.name} className="responsive-img" />
          </div>
        </div>
        <br/>

        <div className="row">
          <h4>Selecine sua nova imagem</h4>
          <Dropzone
            getUploadParams={getUploadParams}
            preview="Adicionar imagem"
            inputContent="Selecione ou arraste suas imagens"
            submitButtonContent="Enviar"
            accept="image/*"
            maxSizeBytes={2048*2048}
            maxFiles={1}
          />
          <br/>
          <div className="col s12">
            <Link to={`/newPrincipal/${id}/files`}>
              Retornar
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
