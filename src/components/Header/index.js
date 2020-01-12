import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header (){
  const [isPrivate, setIsprivate] = useState(useSelector(state => state.auth.isPrivate));

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, {
        edge: "left",
        inDuration: 250
      });
    });
    function loadSeila (){
      let elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }
    loadSeila();
  }, [])

  const logado = useSelector(state => state.auth.signed);

  return (
    <>
    { !isPrivate? (
      <>
      <ul style={{marginTop: 25}} id="dropdown1" className="dropdown-content">
        <li>
            <a href="/painel"
            className="blue-text" style={{marginTop: 25}}>
              {logado ? 'Painel' : 'Entrar'}
            </a>
        </li>
        <li className="divider"></li>
        { logado? null : (
          <li>
            <a href="/registrar" className="blue-text">Registrar</a>
          </li>
        ) }
        <li className="divider"></li>

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
                  <a href="#" className="brand-logo">Logo</a>
                </Link>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <Link to="Noticias">
                      <a href="#">Noticias</a>
                    </Link>
                  </li>
                  <li>
                    <Link to = "Classificados">
                      <a href="#">Classificados</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="Eventos">
                      <a href="#">Eventos</a>
                    </Link>
                  </li>
                  <li>
                    <Link to = "Empresas">
                      <a href="#">Tudo aqui empresa</a>
                    </Link>
                  </li>
                  <li><a href="#" className="dropdown-trigger" data-target="dropdown1">Entrar<i className="material-icons right">arrow_drop_down</i></a></li>
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
          <li>
            <Link to = "painel">
              <p className="red-text">{logado ? 'Painel': 'Entrar'}</p>
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          {logado? null : (
            <li>
              <Link to = "registrar">
                <p className="red-text">Registrar-se</p>
              </Link>
            </li>
          )}
      </ul>
      </>
    ): null
    }
    </>
  );
}
