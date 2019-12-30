import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

export default class Header extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="blue">
            <div className="nav-wrapper">
              <a
                href="#"
                data-target="mobile-demo"
                className="sidenav-trigger show-on-large"
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul id="mobile-demo" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/office.jpg" />
              </div>
              <a href="#user">
                <img className="circle center" src="https://fakeimg.pl/350x200/ff0000,128/000,255" />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
      </>
    );
  }
}
