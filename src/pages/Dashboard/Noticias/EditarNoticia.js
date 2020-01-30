import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Container, Section, List } from './styles';

import api from '../../../services/api';

const schema = Yup.object().shape({
  titulo: Yup.string().required('Insira um titulo da notícia'),
  brev_descricao: Yup.string()
    .required('Insira uma breve descrição')
    .max(25, 'Maximo de 30 Caractere'),
  descricao: Yup.string()
    .required('Insira a descrição da Notícia')
    .min(30, 'Minimo de 30 Caractere'),
  tipo: Yup.number()
    .min(1)
    .max(8),
});

export default function EditarNoticia(props) {
  const { id } = props.match.params;

  const [noticia, setNoticia] = useState({});
  const [images, setImagem] = useState([]);

  const [tipo, setTipo] = useState(8);

  useEffect(() => {
    async function loadNoticia() {
      const response = await api.get(`/noticias/${id}`);

      setNoticia(response.data);
      setImagem(response.data.imagens);
      setTipo(response.data.tipo);
      // console.log(response.data.tipo)
    }

    loadNoticia();
  }, []);

  async function handleUpdateNoticia(data) {
    const response = await api.put(`noticias/${id}`, {
      ...data,
      tipo,
    });
    setNoticia(response.data);

    toast.success('Noticia atualizada com sucesso');
  }

  async function handleDelete(data) {
    await api.delete(`noticias/${id}/imagem/${data}`);

    const response = await api.get(`/noticias/${id}`);
    setImagem(response.data.imagens);
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Editar Noticia</h1>
        <Form
          onSubmit={handleUpdateNoticia}
          schema={schema}
          initialData={noticia}
        >
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="brev_descricao"
              id="brev_descricao"
              type="text"
              className="validate"
            />
          </div>
          <p>Descrição: </p>
          <div className="input-field col l12 s12">
            <Input multiline name="descricao" id="descricao" type="text" />
          </div>
          <p>Classificação: </p>
          <div className="row">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="col s12"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 1}
                    onChange={e => setTipo(1)}
                  />
                  <span className="blue-text">1</span>
                </label>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 2}
                    onChange={e => setTipo(2)}
                  />
                  <span className="blue-text">2</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 3}
                    onChange={e => setTipo(3)}
                  />
                  <span className="blue-text">3</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 4}
                    onChange={e => setTipo(4)}
                  />
                  <span className="blue-text">4</span>
                </label>
              </div>
            </div>
          </div>
          {/* Linha 1 */}
          {/* Linha 2 */}
          <div className="row">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="col s12"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 5}
                    onChange={e => setTipo(5)}
                  />
                  <span className="blue-text">5</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 6}
                    onChange={e => setTipo(6)}
                  />
                  <span className="blue-text">6</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 7}
                    onChange={e => setTipo(7)}
                  />
                  <span className="blue-text">7</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="destaque"
                    id="destaque"
                    type="radio"
                    className="validate"
                    checked={tipo == 8}
                    onChange={e => setTipo(8)}
                  />
                  <span className="blue-text">8</span>
                </label>
              </div>
            </div>
          </div>
          {/* Linha 2 */}

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
        <br />
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
                      <Link to={`/novaNews/${id}/editarImagem/News/${el.id}`}>
                        <i className="material-icons small green-text">edit</i>
                      </Link>
                    </button>
                  </section>
                </li>
              ))}
            </List>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
