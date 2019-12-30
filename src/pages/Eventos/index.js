import React, { Component } from 'react';

import { List, TituloEvento } from './styles';

export default class Eventos extends Component {
  render() {
    return (
      <div className="row grey lighten-5">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <TituloEvento className="center">
                Confira os eventos em sua Cidade
              </TituloEvento>
            </div>
            <div className="col l6 hide-on-small-only" />
          </div>
          <List className="col l12">
            <li className="col l4 s12">
              <a href="https://facebook.com/Delfio.francisco.del">
                <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      src="https://images.sympla.com.br/5df1bee9ec76e-xs.png"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Evento teste 123
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p className="blue-text">25 de Dezembro</p>
                  </div>
                  {/* <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Evento teste 123<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  </div> */}
                </div>
              </a>
            </li>

            <li className="col l4 s12">
              <a href="https://facebook.com/Delfio.francisco.del">
                <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      src="https://images.sympla.com.br/5df1bee9ec76e-xs.png"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Evento teste 123
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p className="blue-text">25 de Dezembro</p>
                  </div>
                  {/* <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Evento teste 123<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  </div> */}
                </div>
              </a>
            </li>

            <li className="col l4 s12">
              <a href="https://facebook.com/Delfio.francisco.del">
                <div className="card hoverable">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      src="https://images.sympla.com.br/5df1bee9ec76e-xs.png"
                    />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      Evento teste 123
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p className="blue-text">25 de Dezembro</p>
                  </div>
                  {/* <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Evento teste 123<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  </div> */}
                </div>
              </a>
            </li>
          </List>
        </div>
      </div>
    );
  }
}
