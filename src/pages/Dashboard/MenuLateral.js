import React, {useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function Menu() {

  const [adm, setAdm] = useState(useSelector(state => state.auth.adm))

  useEffect(() => {
    function loadPrincipal(){
      document.addEventListener('DOMContentLoaded', function() {
        const elems = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(elems, {});
      });
    }

    loadPrincipal();
  }, []);

  return (
    <div className="container">
      <ul id="slide-out" class="sidenav sidenav-fixed">

      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  );
}
