import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useSelector } from 'react-redux';

import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container, Section, List } from './styles';

const schema = Yup.object().shape({
  titulo: Yup.string().required('O titulo é obrigatório'),
  descricao: Yup.string().required('Favor insira uma descrição'),
  fone_contato: Yup.string()
    .required('Favor insira uma descrição')
    .min(6, 'Favor insira no minimo 6 dígitos')
    .max(9, 'Maximo de 9 digitos Não insira o (69)'),
  preco: Yup.string()
    .required('Insira um preço')
    .min(2, 'Mínimo de 2 dígitos')
    .max(7, 'Maximo de 7 digitos'),
});

export default function EditClassificado(props) {
  const [classificado, setClassificado] = useState({});
  const [imagens, setImagens] = useState([]);

  const user = useSelector(state => state.user.profile);
  const { id } = props.match.params;

  useEffect(() => {
    async function loadClassificado() {
      try {
        const response = await api.get(`classificados/${id}`);
        if (response.data.user.id !== user.id) {
          return props.history.push('/painel');
        }
        setClassificado(response.data);
        setImagens(response.data.imagens);
      } catch (err) {}
    }

    loadClassificado();
  }, []);

  async function handleDeleteImage(data) {
    await api.delete(`classificados/${id}/imagem/${data}`);

    const response = await api.get(`classificados/${id}`);
    setImagens(response.data.imagens);
  }

  async function handleUpdate(data) {
    const response = await api.put(`classificados/${id}`, data);

    setClassificado(response.data);
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="header red-text"> Editar seu classificado </h1>
        <hr />
        <br />

        <Form
          schema={schema}
          onSubmit={handleUpdate}
          initialData={classificado}
          className="row"
        >
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="descricao"
              id="titulo"
              type="text"
              className="materialize-textarea"
            />
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="fone_contato"
              id="fone"
              type="number"
              min="6"
              className="validate"
            />
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="preco"
              id="price"
              type="number"
              className="validate"
              min="0.00"
              max="10000.00"
              step="0.01"
            />
          </div>
          <div className="col s12">
            <button
              className="btn waves-effect blue-light"
              type="submit"
              name="action"
            >
              Confirmar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>

        <div className="row">
          <List className="container">
            <div className="col s12">
              <h4 className="center">As imagens do seu produto</h4>
            </div>
            {imagens.length > 0
              ? imagens.map(el => (
                  <li key={el.id} className="col s6 l4">
                    <Section className="col s12" bg={el.url} />

                    <section className="col s12">
                      <button
                        className="right"
                        title="Deletar Imagem"
                        onClick={() => handleDeleteImage(el.id)}
                      >
                        <i className="material-icons small red-text">delete</i>
                      </button>
                      <button className="left" title="Editar Imagem">
                        <Link to={`${id}/editarImagem/${el.id}`}>
                          <i className="material-icons small green-text">
                            edit
                          </i>
                        </Link>
                      </button>
                    </section>
                  </li>
                ))
              : null}
          </List>
        </div>

        <div className="row">
          <div classificado="row">
            {imagens.length === 0 ? (
              <>
                <p className="red-text center">
                  Você ainda pode adicionar imagens
                </p>
                <a href={`postClassificado/${id}/${user.id}`}>
                  <h2 className="center">Cadastrar Imagens</h2>
                </a>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}
