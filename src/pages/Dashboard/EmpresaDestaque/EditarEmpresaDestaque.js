import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O titulo é obrigatório'),
  descricao: Yup.string().required('Favor insira uma descrição'),
  brev_descricao: Yup.string()
    .required('Insira uma breve descrição')
    .min(30, 'Minimo de 30 caracteres')
    .max(150, 'Maximo de 150 caracteres'),
  fone_contato: Yup.string()
    .required('Favor insira uma descrição')
    .min(6, 'Favor insira no minimo 6 dígitos')
    .max(11, 'Maximo de 11 digitos'),
  fone_contato2: Yup.string().max(11, 'Maximo de 11 digitos'),
  email_contato: Yup.string().email('Insira um email válido'),
  endereco: Yup.string().required(
    'Insira um endereço "Avenida Jorge Teixeira 651"'
  ),
});

export default function EditarEmpresaDestaque(props) {
  const { id } = props.match.params;

  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    async function loadEmpresa() {
      const response = await api.get(`empresaDestaque/${id}`);

      const conteudo = response.data;
      setEmpresa(conteudo);
    }
    loadEmpresa();
  }, []);

  async function handleUpdate(data) {
    await api.put(`empresaDestaque/${id}`, data);
    toast.success('Empresa Atualizada');
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Editar Conteudo da Empresa</h1>
        <hr />
        <br />
        <Form onSubmit={handleUpdate} initialData={empresa} schema={schema}>
          <p className="blue-text">Nome da empresa</p>
          <div className="input-field col l12 s12">
            <Input name="nome" id="nome" type="text" className="validate" />
          </div>
          <p className="blue-text">Fone 1</p>
          <div className="input-field col l6 s6">
            <Input
              name="fone_contato"
              id="fone"
              type="number"
              min="6"
              className="validate"
            />
          </div>

          <p className="blue-text">Fone 2</p>
          <div className="input-field col l6 s6">
            <Input
              name="fone_contato2"
              id="fone_contato2"
              type="number"
              className="validate"
              step="0.01"
            />
          </div>
          <p className="blue-text">Email</p>
          <div className="input-field col l6 s6">
            <Input
              name="email_contato"
              id="email_contato"
              type="email"
              className="validate"
            />
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="endereco"
              id="endereco"
              type="text"
              className="validate"
            />
          </div>
          <p className="blue-text">Breve Descrição</p>
          <div className="input-field col l12 s12">
            <Input
              name="brev_descricao"
              id="brev_descricao"
              type="text"
              className="validate"
            />
          </div>
          <p className="blue-text">Descrição</p>
          <div className="input-field col l12 s12">
            <Input multiline name="descricao" id="descricao" type="text" />
          </div>
          <br />
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
          <br />
          <div className="col s12">
            <Link to="/allEmpresaDestaque">Voltar ao painel</Link>
          </div>
          <br />
        </Form>
      </Container>
    </div>
  );
}
