import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import {cadastroEmpresaDestaqueRequest} from '../../../store/modules/user/actions'

import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('O titulo é obrigatório'),
  descricao: Yup.string()
    .required('Favor insira uma descrição'),
  brev_descricao: Yup.string()
    .required('Insira uma breve descrição')
    .min(30, 'Minimo de 30 caracteres')
    .max(150, 'Maximo de 150 caracteres'),
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


export default function EmpresaDestaque() {
  const user = useSelector(state => state.user.profile);
  const [autorizado, setAutorizado] = useState(false)

  useEffect(() => {
    if(user.ADM){
      setAutorizado(true)
    }else{
      setAutorizado(false)
    }
  }, [])

  const dispatch = useDispatch();


  async function handleSubmit(data) {
    await dispatch(cadastroEmpresaDestaqueRequest(data))
  }

  return (
    <div className="container">
      <Container className="col s12">
      {autorizado? (
          <>
          <h1 className="red-text"> Nova empresa Destaque </h1>
          <hr/>
          <h6>1. Esta classificação é destinada para empresas destaque de seu ramo</h6>
          <h6>2. Estas empresas apareceram na listagem da página incial</h6>
          <h6>3. Insira os campos e clique em "Confirmar"</h6>
          <h6>4. Selecione as imagens desejadas</h6>
          <h6>5. A ultima imagem sera sempre a principal</h6>
          <br/>
          <Form schema={schema} className="row" onSubmit={handleSubmit}>
            <div className="col s12 hide-on-small-only">
              <h4 className="grey-text">Preencha os campos abaixo</h4>
            </div>
            <div className="input-field col l12 s12">
              <Input name="nome" id="nome" type="text" className="validate" />
              <label htmlFor="nome">Nome da empresa *</label>
            </div>
            <div className="input-field col l6 s6">
              <Input name="fone_contato" id="fone" type="number" min="6" className="validate" />
              <label htmlFor="fone">Telefone 1 *</label>
            </div>
            <div className="input-field col l6 s6">
              <Input name="fone_contato2" id="fone_contato2" type="number" className="validate" step="0.01"/>
              <label htmlFor="fone_contato2">Telefone 2</label>
            </div>
            <div className="input-field col l6 s6">
              <Input name="email_contato" id="email_contato" type="email" className="validate"/>
              <label htmlFor="email_contato">Email de contato</label>
            </div>
            <div className="input-field col l6 s6">
              <Input name="endereco" id="endereco" type="text" className="validate"/>
              <label htmlFor="endereco">Endereço</label>
            </div>
            <div className="input-field col l12 s12">
              <Input name="brev_descricao" id="brev_descricao" type="text" className="validate" />
              <label htmlFor="brev_descricao">Breve Descrição</label>
            </div>
            <div className="input-field col l12 s12">
              <Input multiline name="descricao" id="descricao" type="text" />
              <label htmlFor="descricao">Descrição da empresa *</label>
            </div>
            <br/>
            <div style={{marginTop: 55}} className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
                <i className="material-icons right">send</i>
              </button>
            </div>
          </Form>
          </>
        ): (
          <h2>Não autorizado</h2>
        )}
      </Container>
    </div>
  );
}
