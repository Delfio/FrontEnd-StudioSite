import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  TtiutloEvento,
  PopularPosts,
  List2,
  DivBannerDestaque,
  ImgBannerDestaque,
} from './styles';

export default function Noticias() {

  const [evento, setEventos] = useState([]);

  const [ anuncio, setAnuncio ] = useState({});

  useEffect(() => {
    async function loadEventos() {
      const response = await api.get('/ultimos/eventos')
      setEventos(response.data)

      const props = await api.get('/anuncio');
      setAnuncio(props.data)
    }

    loadEventos();
  }, [])


  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l9 m12">
          <div className="row">
            <h4 className="blue-text"> Confira Os ultimos eventos </h4>
            <hr />
          </div>
          <List2 style={{ alignItems: 'center' }} key="sdfsd">
            <div className="col s12 l12">
              { evento.map(el => (
                <li key={el.id} className="row">
                  <DivBannerDestaque className="col s5 l4">
                    <ImgBannerDestaque src={el.imagem ? el.imagem.url :
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
                    } />
                  </DivBannerDestaque>
                  <section className="col s7 l8">
                    <TtiutloEvento className="black-text">
                      {el.titulo}
                    </TtiutloEvento>
                    <p className="hide-on-small-only">
                      {el.descricao}
                    </p>
                    <label htmlFor="">Implementar</label>
                    <p>
                      <a href={`evento/${el.id}`}>Ver Mais</a>
                    </p>
                  </section>
                </li>
              )) }

            </div>
          </List2>
        </div>
        {anuncio.Anuncio2 ?
          (
            <div className="col l3 hide-on-med-and-down">
              {anuncio.Anuncio2.imagem ?
                (
                  <div className="card">
                    <div className="right-align blue">
                      <PopularPosts>Confira nossos parceiros</PopularPosts>
                    </div>
                    <section style={{ margin: 25 }} className="card-image">
                      <img
                        className="responsive-img"
                        src={anuncio.Anuncio2.imagem.url}
                        alt=""
                      />
                    </section>
                  </div>
                ) : anuncio.Anuncio2.script || null
              }
            </div>
          ) : null
        }

        {anuncio.Anuncio3 ?
          (
            <div className="col l3 hide-on-med-and-down">
              {
                anuncio.Anuncio3.script ?
                (
                  <iframe
                    src={anuncio.Anuncio3.script.script}
                    title="propaganda-teste"
                    width="320"
                    height="480"
                    frameBorder="0"
                    allowFullScreen
                  />
                ):
                  anuncio.Anuncio3.imagem.url || null
              }
            </div>
          ): null
        }
      </div>
    </div>
  );
}
