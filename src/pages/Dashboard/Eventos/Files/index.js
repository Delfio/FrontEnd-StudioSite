import React, {useEffect, useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { useSelector } from 'react-redux';

import {toast} from 'react-toastify';

import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import Form from './Form';

import { Container, Section, List } from './styles';

export default function Files(props) {
  const { id } = props.match.params;

  const user = useSelector(state => state.user.profile);
  const [autorizado, setAutorizado] = useState(false);
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    if(user.ADM){
      setAutorizado(true)
    }else{
      setAutorizado(false)
    }
    async function loadNoticia() {
      const response = await api.get(`eventos/${id}`)
      // setNoticia(response.data);

      const { imagens, videos } = response.data;
      setImages(imagens);
      setVideo(videos);
    }
    loadNoticia();
  }, []);


  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData()
    body.append('fileField', file)

    const data = new FormData()

    data.append('imagem_evento', file);

    await api.post(`eventos/${id}/imagem`, data);
    const response = await api.get(`eventos/${id}`)

    const { imagens } = response.data;
    setImages(imagens);

    toast.success('imagem cadastrada com sucesso')

    return { url: 'https://httpbin.org/post', body }
  }

  async function handleDelete(data){
    await api.delete(`/eventos/${id}/imagem/${data}`)

    const response = await api.get(`eventos/${id}`)

    const { imagens } = response.data;
    setImages(imagens);
    toast.success('Imagem deletada com sucesso')
  }

  async function deleteEvento(){
    await api.delete(`/eventos/${id}`)

    toast.success('Evento deletado com sucesso')
    return (
      props.history.push('/allEventos')
    )
  }

  return (
    <div className="container">
      {autorizado? (
        <Container className="col s12">
          <h1 className="red-text">Adicionar arquivos</h1>
          <hr/>
          <h6>. Insira os arquivos relacionados ao evento</h6>
          <h6>. A imagem principal será sempre a última inserida</h6>
          <h6>. As quantidades de imagem vai de acordo com o cadastrante</h6>
          <h6>. De preferência pra imagens quadradas '1000x1000'</h6>
          <br/>
          <Dropzone
            // disabled={!logo}
            getUploadParams={getUploadParams}
            // preview="Adicionar imagem"
            inputContent="Selecione ou arraste a logo"
            submitButtonContent="Enviar"
            accept="image/*"
            maxSizeBytes={2024*2024}
            // maxFiles={1}
          />
          <br/>
          <div className ="col s12">
            <h4>Imagens já cadastradas</h4>
          </div>
          <div className="row">
            {images.length > 0 ? (
              <List className="container">
                {images.map(el => (
                  <li className="col l4 s6" key={el.id}>
                    <Section className="col s12" bg={el.url}/>
                    <section className="col s12">
                    <button className="right" title="Deletar Imagem" onClick={() => handleDelete(el.id)}>
                      <i className="material-icons small red-text">delete</i>
                    </button>
                    <button className="left" title="Editar Imagem">
                      <Link to={`editarImagem/Evento/${el.id}`}>
                        <i className="material-icons small green-text">edit</i>
                      </Link>
                    </button>
                  </section>
                  </li>
                ))}
              </List>
            ): null}
          </div>
          <br/>

          <div className="row">
            <Form id={id} />
          </div>

          <br/>
          <div className="row">
            <div style={{display: 'flex', alignItems: 'center'}} className="col s12">
              <button title="Deletar empresa" onClick={()=>deleteEvento()} className="btn-floating btn-samall waves-effect waves-light red">
                <i className="material-icons">delete</i>
              </button>
              <h5 className="red-text" style={{marginLeft: 18, fontWeight: 'bold'}}>Deletar Evento</h5>
            </div>
          </div>
        </Container>
      ) : (
        <h2>Não autorizado</h2>
      )}
    </div>
  );
}
