import React, { useEffect, useState } from 'react';

import { Parceiros } from './styles';

import api from '../../services/api';

export default function Propagandas() {

  const [ anuncio, setAnuncio ] = useState({});

  useEffect(() => {
    async function loadEventos() {
      const props = await api.get('/anuncio');
      setAnuncio(props.data)
    }

    loadEventos();
  }, [])
  return (
    <>
      {anuncio.Anuncio2 ?
        (
          <div className="col l3 hide-on-med-and-down">
            {anuncio.Anuncio2.imagem ?
              (
                <div className="card">
                  <div className="right-align blue">
                    <Parceiros>Confira nossos parceiros</Parceiros>
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
    </>
  );
}
