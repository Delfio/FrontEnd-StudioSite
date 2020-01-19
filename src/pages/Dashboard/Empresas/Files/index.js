import React, {useEffect, useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { Container, Section, List } from './styles';

import Form from './Form';

export default function Files(props) {
  const { id } = props.match.params;

  const user = useSelector(state => state.user.profile);
  const [autorizado, setAutorizado] = useState(false)
  const [empresa, setEmpresa] = useState({})

  const [images, setImages] = useState([])
  const [videos, setVideos] = useState([])
  const [servicos, setServicos] = useState([])

  const [logoEmpresa, setLogo] = useState({});

  useEffect(() => {
    if(user.ADM){
      setAutorizado(true)
    }else{
      setAutorizado(false)
    }

    async function loadEmpresa() {
      const response = await api.get(`empresas/${id}`)

      const conteudo = response.data.Empresas[0];

      setEmpresa(conteudo);

      const {imagens} = conteudo;
      setImages(imagens);

      const {videos} = conteudo;
      setVideos(videos);

      const {servicos} = conteudo;
      setServicos(servicos);

      const { logo } = conteudo;
      setLogo(logo);
    }
    loadEmpresa();
  }, [])

  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData()
    body.append('fileField', file)

    const data = new FormData()

    data.append('logo_empresa', file);

    // const response = await api.put(`empresas/${id}/logo/${logoEmpresa.id}`, data);
    // await setLogo(response.data);

    const response = await api.post(`empresas/${id}/logo`, data);
    await setLogo(response.data);

    return { url: 'https://httpbin.org/post', body }
  }

  const getUploadParamsImage = async ({ file, meta }) => {
    const body = new FormData()
    body.append('fileField', file)

    const data = new FormData()

    data.append('imagem_empresa', file);
    const response = await api.post(`empresas/${id}/imagem`, data);

    const [jaexiste] = images;
    setImages(jaexiste,
      response.data);

    return { url: 'https://httpbin.org/post', body }
  }


  async function handleDelete(data){
    await api.delete(`empresas/imagem/${data}`)

    const response = await api.get(`empresas/${id}`)

    const conteudo = response.data.Empresas[0];

    const {imagens} = conteudo;
    setImages(imagens);
  }



  return (
    <div className="container">
      <Container className="col s12">
        {autorizado? (
          <>
          <h1 className="red-text"> Cadastre os arquivos relacionados a empresa </h1>
          <hr/>
          <h6>{`1. Insira as informações relacionadas a empresa ${empresa.nome}`}</h6>
          <h6>2. Insira imagens relacionadas a empresa</h6>
          <h6>3. Insira a logo da empresa</h6>
          <h6>4. De preferência para o mesmo padrão de imagens</h6>
          <h6>5. As logos devem ser em png sem fundo e quadradas '1000x1000'</h6>
          <h6>6. As imagens não devem passar de 5MB</h6>
          <h6>7. A quantidade de imagens vai da preferência do cadastrante</h6>
          <br/>
          <h4>Logo da empresa</h4>

          <Dropzone
            // disabled={!logo}
            getUploadParams={getUploadParams}
            // preview="Adicionar imagem"
            inputContent="Selecione ou arraste a logo"
            submitButtonContent="Enviar"
            accept="image/*"
            maxSizeBytes={2024*2024}
            maxFiles={1}
          />
          <div className="row">
            {empresa.logo? (
              <>
              <h5 className="grey-text">A logo atual: </h5>
              <section style={{display: 'flex', alignItems: 'flex', justifyContent: 'center'}} className="col s12">
                <img style={{width: '100%', height: '100%', maxWidth: 250}} src={logoEmpresa.url} alt="ImgLogo"/>
              </section>
              </>
            ): null}
          </div>
          <div className="col s12">
            <hr/>
          </div>
          <br/>
          <h4>Adionar imagens relacionada a empresa</h4>
          <Dropzone
            // disabled={!logo}
            getUploadParams={getUploadParamsImage}
            // preview="Adicionar imagem"
            inputContent="Selecione ou arraste as Imagens relacionadas"
            submitButtonContent="Enviar"
            accept="image/*"
            maxSizeBytes={2024*2024}
            // maxFiles={1}
          />

          <br/>

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
                      <Link to={`editarImagem/Empresa/${el.id}`}>
                        <i className="material-icons small green-text">edit</i>
                      </Link>
                    </button>
                  </section>
                  </li>
                ))}
              </List>
            ): null}
          </div>
          {/* Form */}
          <div className="col s12">
            <hr/>
          </div>
          <Form servicos={servicos} videos={videos} id={id}/>
          </>
        ): (
          <h2>Não autorizado</h2>
        )}
      </Container>
    </div>
  );
}
