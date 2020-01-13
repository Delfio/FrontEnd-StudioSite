import React from 'react';
import { useSelector } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

import {Container, Div } from './styles';

export default function Dashboard() {

  const adm = useSelector(state => state.auth.adm);

  return (
    <div className="container">
      <Div className="col s12 m8 l12">
        <div className="section scrollspy">
          <h1 className="header red-text"> Bem vindo </h1>
          <hr/>
        </div>
        <div className="row">
          {adm? (
            <Container className="col s12">
            <li style={{background: 'linear-gradient(45deg, rgba(4, 139, 209), rgba(35, 193, 255))'}} className="col m6 l3 s12">
              <i className="material-icons white-text">add</i>
              <Link to="postClassificado">
                <p className="white-text">Classificados</p>
              </Link>
              <div className="col s12 center">
                <h4 style={{margin: 0}} className="white-text bold">15</h4>
              </div>
            </li>

            <li style={{background: 'linear-gradient(45deg, rgba(255, 86, 88), rgba(245, 138, 169))'}} className="col m6 l3 s12">
              <i className="material-icons white-text">account_circle</i>
                <Link to="allUsers">
                  <p className="white-text">Usuários</p>
                </Link>
                <div className="col s12 center">
                  <h4 style={{margin: 0}} className="white-text bold">5</h4>
                </div>
            </li>
            <li style={{background: 'linear-gradient(45deg, rgba(255, 115, 1), rgba(255, 194, 36))'}} className="col m6 l3 s12">
              <i className="material-icons white-text">business_center</i>
              <Link to="allEmpresas">
                <p className="white-text">Empresas</p>
              </Link>
              <div className="col s12 center">
                  <h4 style={{margin: 0}} className="white-text bold">5</h4>
              </div>
            </li>
            <li style={{background: 'linear-gradient(45deg, #41A34C, #20E4AE)'}} className="col m6 l3 s12">
            <i className="material-icons white-text">event_available</i>
              <Link to="allEmpresas">
                <p className="white-text">Eventos</p>
              </Link>
              <div className="col s12 center">
                  <h4 style={{margin: 0}} className="white-text bold">5</h4>
              </div>
            </li>
          </Container>

          ): (
            <h2>sdfsdf</h2>
          )
        }
        </div>
      </Div>
    </div>
  )
}
