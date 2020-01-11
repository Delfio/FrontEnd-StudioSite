import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container } from './styles';

import { signUpRequest } from '../../../store/modules/auth/actions';

const schema = Yup.object().shape({

  username: Yup.string()
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória'),
  passwordConfimation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas não condizem'),

  phone: Yup.string()
    .required('O nome é obrigatório')
    .min(6, 'Minimo de 6 digitos'),

})

export default function Registrar() {

  const dispatch = useDispatch();

  async function handleSubmit({ username, phone, email, password }) {
    await dispatch(signUpRequest(username, phone, email, password));
  }

  return (
    <div className="row">
      <div className ="container center">
      <h2 className="header blue-text">Olá!</h2>
        <Container className="col l12 center">
          <div className="col s12 l6">
            <Form schema={schema} onSubmit={handleSubmit}>
              <div className="col s12 hide-on-small-only">
                <h5 className="grey-text">Preencha os campos abaixo</h5>
              </div>
              <div className="input-field col l12 s12">
                <Input name="username" id="nome" type="text" className="validate" />
                <label htmlFor="nome">Seu Nome Completo</label>
              </div>
              <div className="input-field col l12 s12">
                <Input name="email" id="email" type="text" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col l12 s12">
                <Input name="password" id="senha" type="password" className="validate" />
                <label htmlFor="senha">Senha</label>
              </div>
              <div className="input-field col l12 s12">
                <Input name="passwordConfimation" id="senha2" type="password" className="validate" />
                <label htmlFor="senha2">Repita sua senha</label>
              </div>
              <div className="input-field col l12 s12">
                <Input name="phone" id="phone" type="text" className="validate" />
                <label htmlFor="phone">Telefone Para contato</label>
              </div>
              <div className="col l12 s12">
                <button className="btn waves-effect waves-light" type="submit" name="action">
                  Cadastrar
                  <i className="material-icons right">send</i>
                </button>
                <Link to="/entrar">
                  <p>Já possuo uma conta</p>
                </Link>
              </div>
            </Form>
          </div>
          <div className="col l6 hide-on-med-and-down">
            <img width="100%" height="100%"  src="https://static.vecteezy.com/system/resources/previews/000/384/539/non_2x/vector-illustration-of-people-avatar-teamwork-concept.jpg"
             className="responsive-img" alt=""/>
          </div>
        </Container>
      </div>
    </div>
  );
}
