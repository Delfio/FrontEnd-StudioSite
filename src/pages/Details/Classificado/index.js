import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../../services/api';

import Propaganda from '../../../components/Propagandas';

import { Container, List, Section, Li } from './styles';

document.addEventListener('DOMContentLoaded', async function() {
  const elems = document.querySelectorAll('.slider');
  M.Slider.init(elems, {});
  const img = await document.querySelectorAll('.materialboxed');
  M.Materialbox.init(img, {});
});

export default function DetailsClassificado(props) {
  const [classificado, setClassificado] = useState({});

  const [conteudo, setConteudo] = useState(false);

  const [imgs, setImgs] = useState([]);

  const [data, setData] = useState('');

  const [img1, setImg1] = useState({});
  const [img2, setImg2] = useState({});
  const [img3, setImg3] = useState({});

  const { id } = props.match.params;

  useEffect(() => {
    async function loadClassificad() {
      try {
        const response = await api.get(`/classificados/${id}`);
        if (!response.data.id) {
          toast.error('Algo deu errado!');
          return props.history.push('/Classificados');
        }
        setConteudo(true);
        setClassificado(response.data);

        setImgs(response.data.imagens);

        if (response.data.imagens[0]) {
          setImg1(response.data.imagens[0]);
        }
        if (response.data.imagens[1]) {
          setImg2(response.data.imagens[1]);
        }
        if (response.data.imagens[2]) {
          setImg3(response.data.imagens[2]);
        }

        const data = format(
          parseISO(response.data.created_at),
          "'Dia' dd 'de' MMM",
          { locale: pt }
        );

        setData(data);
      } catch (err) {
        toast.error('Algo deu errado!');
      }
    }
    loadClassificad();
  }, []);

  return (
    <div className="container">
      <Container className={`col s12 ${conteudo ? null : 'hide'}`}>
        <h4>{classificado.titulo}</h4>
        <div className="row">
          <div className={`col s12 l8 xl7 ${imgs.length > 0 ? null : 'hide'}`}>
            <div className="slider hide-on-small-only">
              <ul className="slides">
                <Li
                  bg={img1.url}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className={`${imgs.length >= 1 ? null : 'hide'}`}
                >
                  <img
                    alt="Imagem1"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '600px',
                      alignItems: 'center',
                      display: 'flex',
                      position: 'center',
                    }}
                    className="responsive-img materialboxed"
                    src={img1.url}
                  />
                </Li>
                <Li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className={`${imgs.length >= 2 ? null : 'hide'}`}
                >
                  <img
                    alt="Img2"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '600px',
                      alignItems: 'center',
                      display: 'flex',
                      position: 'center',
                    }}
                    className="responsive-img"
                    src={img2.url}
                  />
                </Li>
                <Li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className={`${imgs.length >= 3 ? null : 'hide'}`}
                >
                  <img
                    alt="img3"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '600px',
                      alignItems: 'center',
                      display: 'flex',
                      position: 'center',
                    }}
                    className="responsive-img"
                    src={img3.url}
                  />
                </Li>
              </ul>
            </div>
            <div className="row">
              <div className="col s12">
                <div
                  style={{ maxWidth: '380px', maxHeight: '200px' }}
                  className="slider hide-on-med-and-up"
                >
                  <ul
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    className="slides"
                  >
                    <li
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img className="materialboxed" src={img1.url} />
                    </li>
                    <li
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img className="materialboxed" src={img2.url} />
                    </li>
                    <li
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img className="materialboxed" src={img3.url} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <List className="hide-on-small-only">
              {imgs.map(el => (
                <>
                  <li key={el.id} className="col s6 l4 hide-on-small-only">
                    <Section className="col s12" bg={el.url} />
                  </li>
                  <li className="col s4 hide-on-med-and-up">
                    <div
                      style={{ maxWidth: '250px', maxHeight: '200px' }}
                      className="col s12"
                    >
                      <img
                        className="responsive-img materialboxed"
                        width="650"
                        src={el.url}
                        alt={el.id}
                      />
                    </div>
                  </li>
                </>
              ))}
              <div className="row">
                <div className="col s12">
                  <h5>{`R$: ${classificado.preco}`}</h5>
                  <p className="grey-text">{`Publicado: ${data}`}</p>
                  <p>{classificado.descricao}</p>
                  <br />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                    className="col s2"
                  >
                    <i className="material-icons blue-text">local_phone</i>
                    <a href={`tel:${classificado.fone_contato}`}>
                      {classificado.fone_contato}
                    </a>
                  </div>
                </div>
              </div>
            </List>
          </div>
          {/* Caso não tenha imagem */}
          <div className={`col s12 l8 ${imgs.length > 0 ? 'hide' : null}`}>
            <div className="col s12 l12">
              <img
                style={{ maxWidth: 800, maxHeight: 500 }}
                className="responsive-img"
                src="http://www.thebristolarms.com.au/wp-content/uploads/2018/03/img-not-found.png"
                alt="not Found"
              />
            </div>
          </div>
          <Propaganda />
        </div>

        <div className="row">
          <List className="hide-on-med-and-up">
            {imgs.map(el => (
              <>
                <li key={el.id} className="col s6 l4 hide-on-small-only">
                  <Section className="col s12" bg={el.url} />
                </li>
                <li className="col s4 hide-on-med-and-up">
                  <div
                    style={{ maxWidth: '250px', maxHeight: '200px' }}
                    className="col s12"
                  >
                    <img
                      className="responsive-img materialboxed"
                      width="650"
                      src={el.url}
                      alt={el.id}
                    />
                  </div>
                </li>
              </>
            ))}
            <div className="row">
              <div className="col s12">
                <h5>{`R$: ${classificado.preco}`}</h5>
                <p className="grey-text">{`Publicado: ${data}`}</p>
                <p>{classificado.descricao}</p>
                <br />
                <div
                  style={{
                    marginLeft: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                  className="col s2"
                >
                  <i className="material-icons blue-text">local_phone</i>
                  <a href={`tel:${classificado.fone_contato}`}>
                    {classificado.fone_contato}
                  </a>
                </div>
              </div>
            </div>
          </List>
        </div>
      </Container>
    </div>
  );
}
