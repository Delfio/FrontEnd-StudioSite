import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Insira um nome da atividade'),
  descricao: Yup.string().required('Insira uma descrição da atividade'),
});

export default function EditarAtividade(props) {
  const { id } = props.match.params;
  const { atividade_id } = props.match.params;

  const [atividade, setAtividade] = useState({});

  useEffect(() => {
    async function loadAtividade() {
      const response = await api.get(`empresas/${id}`);
      const empresa = response.data.Empresas[0];

      const { servicos } = empresa;

      servicos.map(el => {
        if (el.id == atividade_id) {
          setAtividade(el);
        }
      });
    }
    loadAtividade();
  }, []);

  async function handleSubmit(data) {
    const response = await api.put(
      `empresas/${id}/servico/${atividade_id}`,
      data
    );
    setAtividade(response.data);
    toast.success('Atividade alterada com sucesso');
  }

  return (
    <div className="container">
      <Container className="col s12">
        <Form
          onSubmit={handleSubmit}
          initialData={atividade}
          schema={schema}
          className="row"
        >
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Preencha os campos abaixo</h5>
          </div>
          <div className="input-field col l12 s12">
            <Input name="nome" id="nome" type="text" className="validate" />
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="descricao"
              id="descricao"
              type="text"
              className="materialize-textarea"
            />
          </div>

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
        <div className="col s12">
          <Link to={`/novaEmpresa/${id}/files`}>Voltar</Link>
        </div>
      </Container>
    </div>
  );
}
