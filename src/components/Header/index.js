import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

export default class Header extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, {});
    });
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
  }

  render() {
    return (
      <>
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">Entrar</a></li>
        <li class="divider"></li>
        <li><a href="#!">Registrar</a></li>
        <li class="divider"></li>

      </ul>
        <div className="navbar-fixed">
          <nav className="blue">
            <div className="nav-wrapper">
              <a
                href="#"
                data-target="mobile-demo"
                className="sidenav-trigger hide-on-large-only"
              >
                <i className="material-icons">menu</i>
              </a>
              <div className="container">
                <Link to="/">
                  <a className="brand-logo">Logo</a>
                </Link>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="Noticias">
                      <a href="sass.html">Noticias</a>
                    </Link>
                  </li>
                  <li>
                    <Link to = "Classificados">
                      <a href="badges.html">Classificados</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="Eventos">
                      <a href="badges.html">Eventos</a>
                    </Link>
                  </li>
                  <li>
                    <Link to = "Empresas">
                      <a href="badges.html">Tudo aqui empresa</a>
                    </Link>
                  </li>
                  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Entrar<i class="material-icons right">arrow_drop_down</i></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul id="mobile-demo" className="sidenav">

          <li className>
            <a href>
              <i className="material-icons">cloud</i>Seja Bem Vindo
            </a>
          </li>
          <li>
            <Link to = "/">
            <p className="blue-text">Home</p>
            </Link>

          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to = "Noticias">

            <p className="blue-text">Noticias</p>
            </Link>

          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to = "Classificados">
              <p className="blue-text">Classificados</p>
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to = "Eventos">
              <p className="blue-text">Eventos</p>
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to = "Empresas">
              <p className="blue-text">Guia Empresarial</p>
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
        </ul>
      </>
    );
  }
}
