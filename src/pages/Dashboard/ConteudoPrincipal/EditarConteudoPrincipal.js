import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import {toast} from 'react-toastify';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import api from '../../../services/api';

const schema = Yup.object().shape({
  titulo: Yup.string()
    .required('Insira um titulo do conteúdo'),
  empresa: Yup.string()
    .required("Insira uma empresa : 'Studio Livre'")
    .max(30, 'Maximo de 30 Caractere'),
  descricao: Yup.string()
    .required('Insira uma descrição do conteúdo')
    .min(30, 'Minimo de 30 Caractere'),
  telefone: Yup.string()
    .max(11, 'Máximo de 11 digitos'),
  tipo: Yup.number()
    .min(1)
    .max(3)
    .default(2)
})

export default function EditarConteudoPrincipal(props) {
  const { id } = props.match.params;
  const [autorizado, setAutorizado] = useState(false);

  const [tipo, setTipo] = useState();

  const [conteudo, setConteudo] = useState({});

  useEffect(() => {
    async function load(){
      try{
        const response = await api.get(`principal/${id}`)
        const veio = response.data.id;
        if(veio) setAutorizado(true);

        setConteudo(response.data);

        setTipo(response.data.tipo)

      }catch(err){
        toast.error('Aconteceu algo de errado')
      }
    }
    load();
  }, [])

  async function handleUpdate(data){
    const response = await api.put(`principal/${id}`, {
      titulo: data.titulo,
      empresa: data.empresa,
      descricao: data.descricao,
      telefone: data.telefone,
      tipo: tipo
    })

    setConteudo(response.data);
    toast.success('Projeto Alterado com Sucesso!')
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Atualizar Projeto</h1>
        <hr/>
        <br/>
        <Form initialData={conteudo} schema={schema} onSubmit={handleUpdate}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Preencha os campos abaixo</h5>
          </div>
          <p className="blue-text">Titulo: </p>
          <div className="input-field col l12 s12">
            <Input name="titulo" id="titulo" type="text" className="validate" />
          </div>
          <p className="blue-text">Empresa: </p>
          <div className="input-field col l12 s12">
            <Input name="empresa" id="empresa" type="text" className="validate" />
          </div>
          <p className="blue-text">Telefone: </p>
          <div className="input-field col l12 s12">
            <Input name="telefone" id="telefone" type="text" className="validate" />
          </div>
          <p className="blue-text">Descrição: </p>
          <div className="input-field col l12 s12">
            <Input multiline  name="descricao" id="descricao" type="text" />
          </div>
          <p>Classificação: </p>
          {/* Linha 1 */}
          <div className="row">
            <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} className="col s12">
              <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                <label>
                  <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 1 ? true : false} onChange={e => setTipo(1)}/>
                  <span className="blue-text">1</span>
                </label>
              </div>

              <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                <label>
                  <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 2 ? true : false} onChange={e => setTipo(2)}/>
                  <span className="blue-text">2</span>
                </label>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                <label>
                  <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 3 ? true : false} onChange={e => setTipo(3)}/>
                  <span className="blue-text">3</span>
                </label>
              </div>
            </div>
          </div>
        {/* Linha 1 */}

          <div style={{marginTop: 15}} className="col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>
        <br />
        <hr />
        <div className="row">
          <div className="col s12 center">
            <div className="col s6">
              <Link to="/allConteudoPrincipal">
                Todos os Projetos
              </Link>
            </div>
            <div className="col s6">
              <Link to={`/newPrincipal/${id}/files`}>
                Arquivos deste evento
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
