import React, { useEffect, useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { Section, List } from './styles';

export default function Imagens({ id }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadImage() {
      const response = await api.get(`/principal/${id}`);

      setImages(response.data.imagens);
    }
    loadImage();
  }, []);

  const getUploadParams = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append('fileField', file);

      const data = new FormData();

      data.append('imagem_principal', file);

      await api.post(`principal/${id}/imagem`, data);
      const response = await api.get(`principal/${id}`);

      const { imagens } = response.data;
      setImages(imagens);

      toast.success('imagem cadastrada com sucesso');

      return { url: 'https://httpbin.org/post', body };
    } catch (err) {
      toast.error('Algo deu errado! ');
    }
  };

  async function handleDelete(data) {
    await api.delete(`/principal/imagem/${data}`);

    const response = await api.get(`principal/${id}`);

    const { imagens } = response.data;
    setImages(imagens);
    toast.success('Imagem deletada com sucesso');
  }

  return (
    <>
      <h4 className="blue-text">Adicionar imagens</h4>
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
      <div className="col s12">
        <h4>Imagens já cadastradas</h4>
      </div>
      <div className="row">
        {images.length > 0 ? (
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
                    <Link to={`editarImagem/Evento/${el.id}`}>
                      <i className="material-icons small green-text">edit</i>
                    </Link>
                  </button>
                </section>
              </li>
            ))}
          </List>
        ) : null}
      </div>
      <br />
    </>
  );
}
