import React, {useEffect ,useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import api from '../../../services/api';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container } from './styles';
import { Link } from 'react-router-dom';

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
  });


export default function Classificados(props) {

  const [classificado, setClassificado] = useState({})

  const [data, setData] = useState('');

  const [img1, setImg1] = useState({})
  const [img2, setImg2] = useState({})
  const [img3, setImg3] = useState({})

  const { id } = props.match.params;

  useEffect(() => {
    async function loadClassificado() {
      const response = await api.get(`/classificados/${id}`)
      setClassificado(response.data);

      setImg1(response.data.imagens[0])
      setImg2(response.data.imagens[1])
      setImg3(response.data.imagens[2])

      const data = format(parseISO(response.data.created_at), "'Dia' dd 'de' MMM", {locale: pt});

      setData(data);
    }

    loadClassificado();
  }, [])

  return (

    <div className="container">
      <Container className="col s12">
        <h1 className="red-text">Preview Classificado</h1>
        <hr/>
        <br/>
        <h6>* Esta é uma preview de como o classificado vai ficar na página principal</h6>
        <br/>
        <div className="row">
          <div className="col s12 l8">
            <div className="slider card">
              <ul className="slides">
                <li>
                  <img className="" src={img1.url} />

                </li>
                <li>
                  <img className="" src={img2.url} />

                </li>
                <li>
                  <img className="" src={img3.url} />

                </li>
              </ul>
            </div>
          </div>
          <div className="col s12 l12">
            <div style={{alignItems: 'baseline', display: 'flex'}} className="col s12">
              <h1 className="blue-text">{classificado.titulo}</h1>
              {classificado.preco? (
                <h5 style={{marginLeft: 25}} className="red-text">R$: {classificado.preco}</h5>
              ): null}
            </div>
            <div className="col s12">
              <p style={{marginTop: -25}} className="grey-text">{data}</p>
            </div>
            <p>
              {classificado.descricao}
            </p>
            <div className="row">
              <div style={{alignItems: 'center', display: 'flex'}} className="col s12">
                <i className="material-icons blue-text">local_phone</i>
                <a href={`tel:${classificado.fone_contato}`}>
                  <p title="Ligar para o vendedor" style={{marginLeft: 10}}>{classificado.fone_contato}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
