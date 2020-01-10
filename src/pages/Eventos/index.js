import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import Banner from '../../components/Banners';

import { List, TituloEvento, DivImg} from './styles';

export default function Eventos() {

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function loadEventos() {
      const response = await api.get('/eventos')

      setEventos(response.data)
    }

    loadEventos();
  }, [])

  return (
      <div className="container">
        <div className="row">
          <Banner />
          <div className="col l6 s12">
            <h4 className="center">
              Confira os eventos em sua Cidade
            </h4>
          </div>
        </div>

        <List className="row">
          <div className="col s12">
            {eventos.map(el => (
              <li key="{el.id}" className="col s12 l4">
                <a href={`evento/${el.id}`}>
                  <DivImg className="col l12 s5" bg={el.imagem.url}/>
                </a>
                <section className="col s7 l12">
                  <div className="col s10 left">
                    <TituloEvento>{el.titulo}</TituloEvento>
                  </div>
                  <section className="col s2 right">
                    <a href={`evento/${el.id}`}>
                      <p className="blue-text" style={{marginTop: 20}}><i class="material-icons">more_vert</i></p>
                    </a>
                  </section>
                  <section className="col s12">
                    <div style={{marginTop: 15}} className="divider" />
                  </section>
                  <section>
                    <p className="grey-text">{ format(parseISO(el.created_at),
                        "'Dia' dd 'de' MMM", {locale: pt})
                      }</p>
                  </section>
                </section>
              </li>
            ))}
          </div>
        </List>
      </div>
  );
}
