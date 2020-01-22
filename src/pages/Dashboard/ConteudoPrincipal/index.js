import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import {cadastroInfoPrincipalResquest} from '../../../store/modules/user/actions'

import { Container } from './styles';


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

export default function ConteudoPrincipal() {

  const[autorizado, SetAutorizado] = useState(false);
  const[tipo, setTipo] = useState(0);

  const user = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    if(user.ADM) SetAutorizado(true);

  }, [])

  async function handleSbumit(data){
    await dispatch(cadastroInfoPrincipalResquest({
      titulo: data.titulo,
      empresa: data.brev_descricao,
      descricao: data.descricao,
      telefone: data.telefone,
      tipo: tipo
    }))
  }

  return (
    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Adicionar Conteudos Principais</h1>
        <hr/>
        <h6>. Adicione conteúdos principais</h6>
        <h6>. Os conteúdos principais se destacam em 3 categorias</h6>
        <h6>. Categoria 1 se trata do video na página principal principal</h6>
        <h6>. Categoria 2 se trata dos conteudos ao lado do video na página principal</h6>
        <h6>. Categoria 3 se trata do video na aba de Guia empresarial</h6>
        <h6>. Adicione os conteúdos e clique em 'Confirmar' </h6>
        <h6>. Adicone as imagens referentes a este conteúdo principal </h6>
        <br/>
        <Form schema={schema} onSubmit={handleSbumit}>
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Preencha os campos abaixo</h5>
            </div>
            <div className="input-field col l12 s12">
              <Input name="titulo" id="titulo" type="text" className="validate" />
              <label htmlFor="titulo">Titulo do Conteúdo *</label>
            </div>
            <div className="input-field col l12 s12">
              <Input name="empresa" id="empresa" type="text" className="validate" />
              <label htmlFor="empresa">Empresa *</label>
            </div>
            <div className="input-field col l12 s12">
              <Input name="telefone" id="telefone" type="text" className="validate" />
              <label htmlFor="telefone">Telefone </label>
            </div>
            <p>Descrição: </p>
            <div className="input-field col l12 s12">
              <Input multiline  name="descricao" id="descricao" type="text" />
              <label htmlFor="descricao">Descrição da Notícia *</label>
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
      </Container>
    </div>
  );
}
