import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="page-footer grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Studio5</h5>
              <p className="grey-text text-lighten-4">Anuncie Conosco</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Fone
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-3">
          <div className="container">
            © 2020 Autor - Delfio Francisco
            <a className="grey-text text-lighten-4 right" href="#!">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
