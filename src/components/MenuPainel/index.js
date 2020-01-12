import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function MenuPainel() {

  const adm = useSelector(state => state.auth.adm);

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
      <ul id="slide-out" className="sidenav sidenav-fixed">

      <li><a href="/painel"><i className=" red-text material-icons">home</i>{adm? 'Painel ADM' : 'Painel'}</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div className="divider"></div></li>
      <li><a className="subheader">Subheader</a></li>
      <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
    </div>
  );
}
