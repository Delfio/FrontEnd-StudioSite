import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../../store/modules/auth/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  senha: Yup.string().required('A senha é obrigatória'),
});

export default function Entrar() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, senha }) {
    dispatch(signInRequest(email, senha));
  }

  return (
    <div className="row">
      <div className="container center">
        <h2 className="header blue-text">Bem-vindo</h2>
        <Container className="col l12 center">
          <div className="col s12 l6">
            <Form schema={schema} onSubmit={handleSubmit}>
              <div className="col s12 hide-on-small-only">
                <h4 className="grey-text">Preencha os campos abaixo</h4>
              </div>
              <div className="input-field col l12 s12">
                <Input
                  name="email"
                  id="email"
                  type="text"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col l12 s12">
                <Input
                  name="senha"
                  id="senha"
                  type="password"
                  className="validate"
                />
                <label htmlFor="senha">Senha</label>
              </div>
              <div className="col l12 s12">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  {loading ? 'Carregando...' : 'Acessar'}
                  <i className="material-icons right">send</i>
                </button>
                <Link to="/registrar">
                  <p>Ainda não tenho conta</p>
                </Link>
                {/* <Link to="/">
                  <p>Retornar ao site</p>
                </Link> */}
              </div>
            </Form>
          </div>
          <div className="col l6 hide-on-med-and-down">
            <img
              width="100%"
              height="100%"
              src="https://static.vecteezy.com/system/resources/previews/000/384/539/non_2x/vector-illustration-of-people-avatar-teamwork-concept.jpg"
              className="responsive-img"
              alt=""
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
