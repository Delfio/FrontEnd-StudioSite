import React, { Component } from 'react';

// import { Container } from './styles';

export default class Footer extends Component {
  render() {
    return(
      <footer class="page-footer grey darken-4">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Studio5</h5>
              <p class="grey-text text-lighten-4">Anuncie Conosco</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">WhatsApp</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Fone</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">E-mail</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright grey darken-3">
          <div class="container">
            © 2020 Autor - Delfio Francisco
            <a class="grey-text text-lighten-4 right" href="#!">Facebook</a>
          </div>
        </div>
    </footer>
    )
  }
}
