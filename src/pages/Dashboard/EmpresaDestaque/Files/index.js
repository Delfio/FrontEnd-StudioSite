import React, { useEffect, useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { Container, Section, List } from './styles';

import Form from './Form';

export default function Files(props) {
  const { id } = props.match.params;

  const user = useSelector(state => state.user.profile);
  const [autorizado, setAutorizado] = useState(false);

  const [empresa, setEmpresa] = useState({});

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (user.ADM) {
      setAutorizado(true);
    } else {
      setAutorizado(false);
    }

    async function loadEmpresa() {
      const response = await api.get(`empresaDestaque/${id}`);

      const conteudo = response.data;
      setEmpresa(conteudo);

      const { imagens } = conteudo;
      setImages(imagens);

      const { videos } = conteudo;
      setVideos(videos);
    }
    loadEmpresa();
  }, []);

  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData();
    body.append('fileField', file);

    const data = new FormData();

    data.append('imagem_empresa_destaque', file);
    await api.post(`empresaDestaque/${id}/imagem`, data);

    const response = await api.get(`empresaDestaque/${id}`);

    setImages(response.data.imagens);

    return { url: 'https://httpbin.org/post', body };
  };

  async function handleDelete(data) {
    await api.delete(`empresaDestaque/imagem/${data}`);

    const response = await api.get(`empresaDestaque/${id}`);

    const conteudo = response.data;

    const { imagens } = conteudo;
    setImages(imagens);
    toast.success('Imagem deletada com sucesso');
  }

  async function deleteEmpresa() {
    await api.delete(`/empresaDestaque/${id}`);

    return props.history.push('/allEmpresa');
  }

  return (
    <div className="container">
      <Container className="col s12">
        {autorizado ? (
          <>
            <h1 className="red-text">
              {' '}
              Cadastre os arquivos relacionados a empresa{' '}
            </h1>
            <hr />
            <h6>{`1. Insira as informações relacionadas a empresa ${empresa.nome}`}</h6>
            <h6>2. Insira imagens relacionadas a empresa</h6>
            <h6>4. De preferência para o mesmo padrão de imagens</h6>
            <h6>5. As Imagens devem ser quadradas '1000x1000'</h6>
            <h6>6. As imagens não devem passar de 5MB</h6>
            <h6>
              7. A quantidade de imagens vai da preferência do cadastrante
            </h6>
            <br />
            <h4>Imagens da empresa</h4>

            <Dropzone
              // disabled={!logo}
              getUploadParams={getUploadParams}
              // preview="Adicionar imagem"
              inputContent="Selecione ou arraste a logo"
              submitButtonContent="Enviar"
              accept="image/*"
              maxSizeBytes={2024 * 2024}
              // maxFiles={1}
            />
            <br />
            <div className="row">
              <List className="container">
                {images.map(el => (
                  <li className="col l4 s6" key={el.id}>
                    <Section className="col s12" bg={el.url} />
                    <section className="col s12">
                      <button
                        className="right"
                        title="Deletar Imagem"
                        onClick={() => handleDelete(el.id)}
                      >
                        <i className="material-icons small red-text">delete</i>
                      </button>
                      <button className="left" title="Editar Imagem">
                        <Link to={`editarImagem/EmpresaDestaque/${el.id}`}>
                          <i className="material-icons small green-text">
                            edit
                          </i>
                        </Link>
                      </button>
                    </section>
                  </li>
                ))}
              </List>
            </div>

            <Form videos={videos} id={id} />
            <br />
            <div className="row">
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                className="col s12"
              >
                <button
                  title="Deletar empresa"
                  onClick={() => deleteEmpresa()}
                  className="btn-floating btn-samall waves-effect waves-light red"
                >
                  <i className="material-icons">delete</i>
                </button>
                <h5
                  className="red-text"
                  style={{ marginLeft: 18, fontWeight: 'bold' }}
                >
                  Deletar empresa
                </h5>
              </div>
            </div>
          </>
        ) : (
          <h2>Não autorizado</h2>
        )}
      </Container>
    </div>
  );
}
