import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


import api from '../../../services/api';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function NoticiasListadas() {

  const [autorizado, setAutorizacao] = useState(false)

  const [noticia1 , SetNoticia1] = useState({});
  const [noticia2 , SetNoticia2] = useState([]);
  const [noticia3 , SetNoticia3] = useState([]);
  const [noticia4 , SetNoticia4] = useState([]);
  const [noticia5 , SetNoticia5] = useState([]);
  const [noticia6 , SetNoticia6] = useState([]);
  const [noticia7 , SetNoticia7] = useState([]);
  const [noticia8 , SetNoticia8] = useState([]);

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if(!user.ADM){
      setAutorizacao(false);
      return
    }else {
      setAutorizacao(true);

    }

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

  async function DeleteNews(data){
    await api.delete(`/noticias/${data}`)

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

  return (
    <div className="container">
      <Container className="col s12">
        {autorizado? (
          <>
          <h1 className="red-text">Lista das Noticias Listadas</h1>
          <hr/>
          <h6>. Todas as noticias nesta lista estão listadas na página principal</h6>
          <h6>. As noticias são classificadas de acordo com a sua classificação cadastrada</h6>
          <br/>
          <h4>Noticia Principal</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
              <td>{noticia1.id}</td>
              <td>{noticia1.titulo}</td>
              <td>{noticia1.created_at}</td>
              <td>
                <Link to={`/novaNews/${noticia1.id}/files`}>
                  Visualizar
                </Link>
              </td>
              <td>
                <Link to={`editarNews/${noticia1.id}`}>
                  Editar
                </Link>
              </td>
              <td>
                <button title="Remover Noticia" onClick={() => DeleteNews(noticia1.id)} className="btn-floating btn-samall waves-effect waves-light red">
                  <i className="material-icons">remove_circle</i>
                </button>
              </td>
              </tbody>
            </table>

          <br/>

          <h4>Noticia 2</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>ImagemPrincipal</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia2.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td className="center">{el.imagem? 'Sim' : 'Não'}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>

            <h4>Noticia 3</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia3.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>

            <h4>Noticia 4</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia4.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>

            <h4>Noticia 5</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>ImagemPrincipal</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia5.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td className="center">{el.imagem? 'Sim' : 'Não'}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>

            <h4>Noticia 6</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>ImagemPrincipal</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia6.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td className="center">{el.imagem? 'Sim' : 'Não'}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>

            <h4>Noticia 7</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia7.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>

            <h4>Noticia 8</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Data de criação</th>
                <th>ImagemPrincipal</th>
                <th>Arquivos</th>
                <th>Editar</th>
                <th>Deletar</th>
              </tr>
              </thead>
              <tbody>
                {noticia8.map(el => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.titulo}</td>
                    <td>{el.created_at}</td>
                    <td className="center">{el.imagem? 'Sim' : 'Não'}</td>
                    <td>
                      <Link to={`/novaNews/${el.id}/files`}>
                        Visualizar
                      </Link>
                    </td>
                    <td>
                      <Link to={`editarNews/${el.id}`}>
                        Editar
                      </Link>
                    </td>
                    <td>
                      <button title="Remover Noticia" onClick={() => DeleteNews(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                        <i className="material-icons">remove_circle</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ): (
          <h2>Não autorizado!</h2>
        )}
      </Container>
    </div>
  );
}
