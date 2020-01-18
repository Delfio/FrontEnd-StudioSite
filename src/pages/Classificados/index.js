import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banners';
import Propagandas from '../../components/Propagandas'

import { Container, ImgAnuncio } from './styles';

import api from '../../services/api';

export default function Classificados() {

  const [anuncios, setAnuncios] = useState([])


  useEffect(() => {
    async function loadAnuncio() {
      const response = await api.get('/classificados');
      setAnuncios(response.data);
    }

    loadAnuncio();
  }, [])

  return (
    <div className="row">
      <div className="container">
        <Banner />

        <div className="col l8 s12">
          <Container key="name">
            {anuncios.map(el => (
              el.aprovado? (
                <a href={`classificado/${el.id}`}>
                <li className="row">
                  <div style={{alignItems: 'center', display: 'flex'}} className="col s12">
                    <div style={{maxWidth: '150px', maxHeight: '238px', display: 'inline-block', marginRight: '20px', alignItems: 'center', display: 'flex'}} className="col l4 s5">
                      <section className="col l12 s12">
                        <ImgAnuncio
                          src={el.imagem ? el.imagem.url : null}
                          alt={el.imagem ? el.imagem.type : null}
                        />
                      </section>
                    </div>
                    <section className="col l5 hide-on-med-and-down">
                      <h2 className="truncate black-text">{el.titulo}</h2>
                      <label className="grey-text" htmlFor="h5">
                        {`Tel: ${el.fone_contato}`}
                      </label>
                    </section>
                    <section className="col l3 hide-on-med-and-down">
                      <h5 className="center">{`R$ ${el.preco}`}</h5>
                    </section>
                    <section className="col s7 hide-on-large-only">
                      <h6 className="black-text">{el.titulo}</h6>
                      <h5>{`R$ ${el.preco}`}</h5>
                      <label className="grey-text" htmlFor="">
                        {`Tel: ${el.fone_contato}`}
                      </label>
                    </section>
                  </div>
                </li>
              </a>
              ): null
            ))}

          </Container>
        </div>

        <Propagandas />
      </div>
    </div>
  );
}
