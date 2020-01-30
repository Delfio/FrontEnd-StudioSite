import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import { Container } from './styles';

export default function AllNews() {
  const [autorizado, setAutorizacao] = useState(false);
  const [noticias, setNoticias] = useState([]);

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if (!user.ADM) {
      setAutorizacao(false);
      return;
    }
    setAutorizacao(true);

    async function loadNoticias() {
      const response = await api.get(`/admin/noticias`);
      setNoticias(response.data);
    }
    loadNoticias();
  }, []);

  async function DeleteNews(data) {
    await api.delete(`/noticias/${data}`);
    const response = await api.get(`/admin/noticias`);
    setNoticias(response.data);
  }

  return (
    <div className="container">
      <Container className="col 12">
        {autorizado ? (
          <>
            <h1 className="red-text">Todos as Noticias</h1>
            <hr />
            <br />
            <h6>. Lista de todas as noticias</h6>
            <h6>. Nesta lista nem todas estão em exibição</h6>
            <br />
            <table className="highlight">
              <thead>
                <tr>
                  <th>titulo</th>
                  <th>Criação</th>
                  <th>Classificação</th>
                  <th>Imagens</th>
                  <th>Deletar</th>
                  <th>Detalhes</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {noticias.map(el => (
                  <tr key={el.id}>
                    <td>{el.titulo}</td>
                    <td>
                      {format(parseISO(el.created_at), "'Dia' dd 'de' MMM", {
                        locale: pt,
                      })}
                    </td>
                    <td>{el.tipo}</td>
                    <td>{el.imagens.length}</td>
                    <td>
                      <button
                        title="Remover Noticia"
                        onClick={() => DeleteNews(el.id)}
                        className="btn-floating btn-samall waves-effect waves-light red"
                      >
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>Detalhes</Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>Editar</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}
      </Container>
    </div>
  );
}
