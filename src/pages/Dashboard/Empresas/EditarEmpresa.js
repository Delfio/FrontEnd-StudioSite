import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import {toast} from 'react-toastify';

import api from '../../../services/api';

import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O titulo é obrigatório'),
  descricao: Yup.string()
    .required('Favor insira uma descrição'),
  fone_contato: Yup.string()
    .required('Favor insira uma descrição')
    .min(6, 'Favor insira no minimo 6 dígitos')
    .max(11, 'Maximo de 11 digitos'),
  fone_contato2: Yup.string()
    .max(11, 'Maximo de 11 digitos'),
  email_contato: Yup.string()
    .email('Insira um email válido'),
  endereco: Yup.string()
    .required('Insira um endereço "Avenida Jorge Teixeira 651"')
})

export default function EditarEmpresa(props) {
  const { id } = props.match.params;

  const [empresa, setEmpresa] = useState({})

  const [destaque, setDestaque] = useState(false);

  useEffect(() => {
    async function loadEmpresa(){
      const response = await api.get(`empresas/${id}`)
      const conteudo = response.data.Empresas[0];

      setEmpresa(conteudo)
      setDestaque(conteudo.destaque)
    }
    loadEmpresa();
  }, [])

  async function handleUpdate(data){
    await api.put(`empresas/${id}`, {
      ...data,
      destaque
    })
    toast.success('Empresa Atualizada')
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Editar a Empresa</h1>
        <hr/>
        <br/>
        <Form onSubmit={handleUpdate} initialData={empresa} schema={schema}>
          <p className="blue-text">Nome da empresa</p>
          <div className="input-field col l12 s12">
              <Input name="nome" id="nome" type="text" className="validate" />
            </div>

            <p className="blue-text">Descrição da empresa</p>
            <div className="input-field col l12 s12">
              <Input name="descricao" id="descricao" type="text" className="materialize-textarea" />
            </div>

            <p className="blue-text">Telefone 1</p>
            <div className="input-field col l6 s6">
              <Input name="fone_contato" id="fone" type="number" min="6" className="validate" />
            </div>

            <p className="blue-text">Telefone 2</p>
            <div className="input-field col l6 s6">
              <Input name="fone_contato2" id="fone_contato2" type="number" className="validate" step="0.01"/>
            </div>

            <p className="blue-text">Email</p>
            <div className="input-field col l6 s6">
              <Input name="email_contato" id="email_contato" type="email" className="validate"/>
            </div>

            <p className="blue-text">Endereço</p>
            <div className="input-field col l6 s6">
              <Input name="endereco" id="endereco" type="text" className="validate"/>
            </div>

            <p className="blue-text">Destaque</p>
            <div style={{displa: 'flex', alignItems: 'center', justifyContent:''}} className="col s12">
              <label>
                <Input name="destaque" id="destaque" type="checkbox" className="validate" checked={destaque} onChange={e => setDestaque(e.target.checked)}/>
                <span className="blue-text">Destaque</span>
                {console.log(destaque)}
              </label>
            </div>
            <br/>
            <div style={{marginTop: 55}} className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
                <i className="material-icons right">send</i>
              </button>
            </div>

        </Form>
      </Container>
    </div>
  );
}
