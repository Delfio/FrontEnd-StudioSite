import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import {cadastroEmpresaRequest} from '../../../store/modules/user/actions'


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

export default function Empresas() {

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

  const [destaque, setDestaque] = useState(false);

  async function handleSubmit(data) {
    await dispatch(cadastroEmpresaRequest({
      nome: data.nome,
      descricao: data.descricao,
      fone_contato: data.fone_contato,
      fone_contato2: data.fone_contato2,
      email_contato: data.email_contato,
      endereco: data.endereco,
      destaque: destaque,
    }))
  }


  return (
    <div className="container">
      <Container className="col s12">
        {autorizado? (
          <>
          <h1 className="red-text"> Nova empresa </h1>
          <hr/>
          <h6>1. Insira os campos e clique em "Confirmar"</h6>
          <h6>2. Selecione as imagens desejadas</h6>
          <h6>3. A ultima imagem sera sempre a principal</h6>
          <h6>4. Classifique as publicações como 'Empresa destaque' ou 'Empresa Normal'</h6>
          <h6>5. Empresas em destaque ficam no topo da página e tem mais informações expostas</h6>
          <h6>6. Insira as imagens de acordo com as especificações, depois de confirmar os campos a baixo</h6>
          <br/>
          <Form schema={schema} className="row" onSubmit={handleSubmit}>
            <div className="col s12 hide-on-small-only">
              <h4 className="grey-text">Preencha os campos abaixo</h4>
            </div>
            <div className="input-field col l12 s12">
              <Input name="nome" id="nome" type="text" className="validate" />
              <label htmlFor="nome">Nome da empresa *</label>
            </div>
            <div className="input-field col l12 s12">
              <Input name="descricao" id="descricao" type="text" className="materialize-textarea" />
              <label htmlFor="descricao">Descrição da empresa *</label>
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
          </>
        ): (
          <h2>Não autorizado</h2>
        )}
      </Container>
    </div>
  );
}
