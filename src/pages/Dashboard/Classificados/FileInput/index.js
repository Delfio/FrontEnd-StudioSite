import React, { useEffect, useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import api from '../../../../services/api';

import { Container, Ul } from './styles';

export default function FileInput(props) {
  const [permitido, setPermissao] = useState(false);
  const [imageLimit, setImageLimit] = useState(false);

  const [classificado, setClassificado] = useState({});

  const { id } = props.match.params;
  const { user_id } = props.match.params;

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    async function verifyPermission() {
      try {
        if (user_id != user.id) {
          setPermissao(false);
          toast.error('Algo deu errado!');
        } else {
          setPermissao(true);
        }
        const response = await api.get(`/classificados/${id}`);

        setClassificado(response.data);

        const { imagens } = response.data;

        if (imagens.length >= 3) {
          setImageLimit(false);
        } else {
          setImageLimit(true);
        }
      } catch (err) {
        toast.error('Algo deu errado!');
      }
    }

    verifyPermission();
  }, []);

  const getUploadParams = async ({ file, meta }) => {
    const body = new FormData();
    body.append('fileField', file);

    const data = new FormData();

    data.append('imagens_cadastro', file);
    api.post(`classificados/${id}/imagem`, data);

    const response = await api.get(`/classificados/${id}`);

    const { imagens } = response.data;
    if (imagens.length >= 3) {
      setImageLimit(false);
    }
    if (imagens.length < 3) {
      setImageLimit(true);
    }

    return { url: 'https://httpbin.org/post', body };
  };

  return (
    <div className="container">
      {permitido ? (
        <Container className="col s12">
          <h1 className="header red-text"> Imagens do classificado </h1>
          <hr />
          <h6>1. Insira até 3 Imagens por produto e clique em 'Enviar'</h6>
          <h6>2. As imagens deve ser nítidas e claras</h6>
          <h6>3. De preferência as fotos tiradas na horizontal 'Quadradas'</h6>
          <h6>4. Tamanho máximo por imagem '2 MB'</h6>
          <br />
          {imageLimit ? (
            <Dropzone
              disabled={!imageLimit}
              getUploadParams={getUploadParams}
              preview="Adicionar imagem"
              inputContent="Selecione ou arraste imagem"
              submitButtonContent="Enviar"
              accept="image/*"
              maxSizeBytes={2024 * 2024}
              maxFiles={3}
            />
          ) : (
            <Dropzone
              disabled
              getUploadParams={getUploadParams}
              preview="Adicionar imagem"
              inputContent="Selecione ou arraste imagem"
              submitButtonContent="Enviar"
              accept="image/*"
              maxSizeBytes={2024 * 2024}
              maxFiles={3}
            />
          )}
          <br />
          <h4>
            {!imageLimit ? (
              <>
                <h3 className="red-text center">
                  Você já fez os 3 uploads permitidos
                </h3>
                <div className="row">
                  <Ul className="container">
                    <li className="col s6 l6 center">
                      <h4>Titulo</h4>
                      <p>* {classificado.titulo}</p>
                    </li>
                    <li className="col s6 l6">
                      <h4>Preço</h4>
                      <p>R$: {classificado.preco}</p>
                    </li>
                    <li className="col s12 l12">
                      <h4>Descrição</h4>
                      <p>* {classificado.descricao}</p>
                    </li>
                  </Ul>
                </div>
              </>
            ) : (
              <>
                <h2 className="blue-text center">Confira seus dados</h2>
                <div className="row">
                  <Ul className="container">
                    <li className="col s6 l6 center">
                      <h4>Titulo</h4>
                      <p>* {classificado.titulo}</p>
                    </li>
                    <li className="col s6 l6">
                      <h4>Preço</h4>
                      <p>R$: {classificado.preco}</p>
                    </li>
                    <li className="col s12 l12">
                      <h4>Descrição</h4>
                      <p>* {classificado.descricao}</p>
                    </li>
                  </Ul>
                </div>
              </>
            )}
          </h4>
        </Container>
      ) : (
        <h2>404 NOT FOUND</h2>
      )}
    </div>
  );
}
