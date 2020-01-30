import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Propaganda from '../../components/Propagandas';

import {
  TtiutloEvento,
  List2,
  DivBannerDestaque,
  ImgBannerDestaque,
} from './styles';

export default function Noticias() {
  const [evento, setEventos] = useState([]);

  useEffect(() => {
    async function loadEventos() {
      const response = await api.get('/ultimos/eventos');
      setEventos(response.data);
    }

    loadEventos();
  }, []);

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
              {evento.map(el => (
                <li key={el.id} className="row">
                  <DivBannerDestaque className="col s5 l4">
                    <ImgBannerDestaque
                      src={
                        el.imagem
                          ? el.imagem.url
                          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
                      }
                    />
                  </DivBannerDestaque>
                  <section className="col s7 l8">
                    <TtiutloEvento className="black-text">
                      {el.titulo}
                    </TtiutloEvento>
                    <p className="hide-on-small-only">{el.descricao}</p>
                    <label htmlFor="">Implementar</label>
                    <p>
                      <a href={`evento/${el.id}`}>Ver Mais</a>
                    </p>
                  </section>
                </li>
              ))}
            </div>
          </List2>
        </div>
        <Propaganda />
      </div>
    </div>
  );
}
