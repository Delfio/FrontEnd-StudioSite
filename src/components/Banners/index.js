import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import M from 'materialize-css/dist/js/materialize.min.js';

import gif from '../../assets/gif_nativida.gif';

export default class Banner extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: 15 }} className="grey lighten-5">
          <div className="container center">
            <img className="responsive-img" src={gif} alt="img-teste" />
          </div>
        </div>
      </>
    );
  }
}
