import React, { useEffect, useState } from 'react';

import api from '../../services/api';

// import Menu from '../../components/Header';
// import Footer from '../../components/Footer';

import {
  TxtNoticiaPrincipal,
  DivNoticia,
  TxtNoticiasSecundarias,
  Huipremiumphoto,
  TituloNoticia,
  List,
} from './styles';

export default function Noticias() {

  const [noticia1 , SetNoticia1] = useState({});
  const [noticia2 , SetNoticia2] = useState([]);
  const [noticia3 , SetNoticia3] = useState([]);
  const [noticia4 , SetNoticia4] = useState([]);
  const [noticia5 , SetNoticia5] = useState([]);
  const [noticia6 , SetNoticia6] = useState([]);
  const [noticia7 , SetNoticia7] = useState([]);
  const [noticia8 , SetNoticia8] = useState([]);

  useEffect(() => {
    async function loadNoticias() {
      const response = await api.get('/noticias')

      response.data.map(el => (
        SetNoticia1(el.Noticia1),
        SetNoticia2(el.Noticia2),
        SetNoticia3(el.Noticia3),
        SetNoticia4(el.Noticia4),
        SetNoticia5(el.Noticia5),
        SetNoticia6(el.Noticia6),
        SetNoticia7(el.Noticia7),
        SetNoticia8(el.Noticia8)
      ))
    }

    loadNoticias();
  }, [])

  return (
    <>
    <div className="row">
      <div className="container">
        <div className="row">
          <DivNoticia className="col s12 l6">
            <a href={`noticia/${noticia1.id}`}>
              <TxtNoticiaPrincipal>
                {noticia1.titulo}
              </TxtNoticiaPrincipal>
            </a>
            {noticia3.map(el => (
              <section key={el.id} className="col s12 l12">
                <a href={`noticia/${el.id}`}>
                  <TxtNoticiasSecundarias>
                    {el.titulo}
                  </TxtNoticiasSecundarias>
                </a>
              </section>
            ))}
            <div className="col s12 l11 center-alignt">
              <hr />
            </div>

            {noticia4.map(el => (
              <section key={el.id} className="col s4 l4">
                <a href={`noticia/${el.id}`}>
                  <TituloNoticia className="red-text">
                    {el.titulo}
                  </TituloNoticia>
                </a>
              </section>
            ))}

            <div className="col s12 l11 center-alignt">
              <hr />
            </div>

            {noticia5.map(el => (
              <div key={el.id} className="col s12 l4">
                <a href={`noticia/${el.id}`}>
                  <section className="col s6 l12">
                    <Huipremiumphoto src={el.imagem.url} />
                  </section>
                  <section className="col s6 l12">
                    <TituloNoticia className="red-text">
                      {el.titulo}
                    </TituloNoticia>
                  </section>
                </a>
              </div>
            ))}
          </DivNoticia>

          <div style={{display: 'table'}} className="col s12 l6 m12">
          {noticia2.map(el => (
            <a key={el.id} href={`noticia/${el.id}`}>
              <div className="col s6 l6 m6">
                <Huipremiumphoto
                  src={el.imagem ? el.imagem.url: null}
                  alt={el.imagem ? el.imagem.file: "Not"}
                />
                <section className="">
                  <TituloNoticia className="blue-text">
                    {el.titulo}
                  </TituloNoticia>
                  <p className="red-text">
                    * {el.brev_descricao}
                  </p>
                </section>
              </div>
            </a>
          ))}

          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="hide-on-med-and-up">
              <div className="col s12">
                <h4 htmlFor="hr">Noticias</h4>
                <hr />
              </div>
            </div>
            { noticia6.map(el => (
              <a key={el.id} href={`/Noticias/${el.id}`}>
                <div className="col s12 l4">
                  <section className="col s12">
                    <Huipremiumphoto src={el.imagem ? el.imagem.url : null} />
                  </section>
                  <section>
                    <TituloNoticia className="red-text">
                     {el.titulo}
                    </TituloNoticia>
                  </section>
                </div>
              </a>
            )) }
            <div className="row hide-on-med-and-up">
              <div className="col s12">
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="row hide-on-med-and-down">
          <div className="col s12 l4">
            <hr />
          </div>
          <div className="col s12 l4">
            <hr />
          </div>
          <div className="col s12 l4">
            <hr />
          </div>
        </div>

        <div className="row">
          {noticia7.map(el => (
              <div className="col s12 l4">
              <List key="name">
                <li className="col s12">
                  <a className="blue-text" href={`noticia/${el.id}`}>
                    {el.titulo}
                  </a>
                </li>
              </List>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col s12">
            <h4>Veja Também</h4>
            <hr />
          </div>
          <div className="row">
            <div className="col s12">
              {noticia8.map(el => (
                <a href={`noticia/${el.id}`}>
                  <div className="col s12 l4">
                    <section className="col s12">
                      <Huipremiumphoto
                        src={el.imagem? el.imagem.url : null}
                      />
                    </section>
                    <section className="col s12">
                      <TituloNoticia>
                        {el.titulo}
                      </TituloNoticia>
                    </section>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
