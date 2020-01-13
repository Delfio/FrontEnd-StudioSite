import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {Container, Div, Ul2 } from './styles';

export default function Dashboard() {

  const adm = useSelector(state => state.auth.adm);

  const user = useSelector(state => state.user.profile);

  return (
    <div className="container">
      <Div className="col s12 m8 l12">
        <div className="section scrollspy">
          <h1 className="header red-text"> Bem vindo </h1>
          <hr/>
        </div>
        <div className="row">
          {adm? (
            <>
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
          <br/>

          <div className="row">
            <h2 className="blue-text">Sobre este Site</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br/>
            <h4>Mais informações:</h4>
            <hr/>
            <div className="row">
              <div className="col s6">
                <h6 className="red-text center">Contato Técnico</h6>
              </div>
              <div className="col s6">
                <h6 className="red-text center">Contato Administrativo</h6>
              </div>
            </div>
            <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}} className="col s6">
              <i className="material-icons black-text">local_phone</i>
              <a href="tel:69993014603">(69) 993014603</a>
              <br/>
            </div>

            <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}} className="col s6">
              <i className="material-icons black-text">local_phone</i>
              <a href="tel:69993014603">(69) 993014603</a>
              <br/>
            </div>
          </div>
          <br/>

          <div className="row">
            <div className="col s12 m12 l6">
              <Ul2 className="card">
                <li>
                  <i className="medium material-icons blue-text">account_circle</i>
                  <h5>{user.username}</h5>
                </li>
                <li className="divider" />
                <li>
                  <i className="material-icons black-text">phone</i>
                  <h6 className="bold">
                    {user.phone}
                  </h6>
                </li>
                <li className="divider" />
                <li>
                  <i className="material-icons black-text">mail</i>
                  <h6>
                    {user.email}
                  </h6>
                </li>
                <li className="divider" />
                <li>
                  <i className="material-icons black-text">monetization_on</i>
                  <h6>
                    {`Anuncios: ${user.anuncios}`}
                  </h6>
                </li>
                <li className="divider" />

              </Ul2>
            </div>
            <div className="col s12 m12 l6">
              <h4 className="blue-text">Informação Util</h4>
              <p>Caso tenha algum problema, atualize a página!
                <br/>
                Se o problema persistir entre em contato com nosso suporte técnico
                </p>
            </div>
          </div>

          </>
          ): (
            <>
            <br/>
            <div className="row">
              <h2 className="blue-text">Sobre este Site</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <br/>
              <h4>Mais informações:</h4>
              <hr/>
              <div className="row">
                <div className="col s6">
                  <h6 className="red-text center">Contato Técnico</h6>
                </div>
                <div className="col s6">
                  <h6 className="red-text center">Contato Administrativo</h6>
                </div>
              </div>
              <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}} className="col s6">
                <i className="material-icons black-text">local_phone</i>
                <a href="tel:69993014603">(69) 993014603</a>
                <br/>
              </div>

              <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}} className="col s6">
                <i className="material-icons black-text">local_phone</i>
                <a href="tel:69993014603">(69) 993014603</a>
                <br/>
              </div>
            </div>
            <br/>
            {/*sdfasdf */}

            <br/>

            <div className="row">
              <div className="col s12 m12 l6">
                <Ul2 className="card">
                  <li>
                    <i className="medium material-icons blue-text">account_circle</i>
                    <h5>{user.username}</h5>
                  </li>
                  <li className="divider" />
                  <li>
                  <i className="material-icons black-text">phone</i>
                  <h6 className="bold">
                    {user.phone}
                  </h6>
                </li>
                <li className="divider" />
                <li>
                  <i className="material-icons black-text">mail</i>
                  <h6>
                    {user.email}
                  </h6>
                </li>
                <li className="divider" />
                <li>
                  <i className="material-icons black-text">monetization_on</i>
                  <h6>
                    {`Anuncios: ${user.anuncios}`}
                  </h6>
                </li>
                <li className="divider" />
                </Ul2>
              </div>
              <div className="col s12 m12 l6">
                <h4 className="blue-text">Suas informações</h4>
                <p>Caso tenha algum problema, atualize a página!
                  <br/>
                  Se o problema persistir entre em contato com nosso suporte técnico
                  </p>
              </div>
            </div>
          </>
          )
        }
        </div>
      </Div>
    </div>
  )
}
