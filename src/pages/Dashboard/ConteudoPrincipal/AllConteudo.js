import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

import { Container } from './styles';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function TodosOsEventos() {

  const [autorizado, setAutorizacao] = useState(false)

  const [info1, setInfo1] = useState([])
  const [info2, setInfo2] = useState([])
  const [info3, setInfo3] = useState([])

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if(!user.ADM){
      setAutorizacao(false);
      return
    }else {
      setAutorizacao(true);
    }
    async function loadEmpresas() {
      const response = await api.get(`/admin/infos`);
      const {Info2} = response.data;
      const {Info3} = response.data;
      const {Info1} = response.data;

      setInfo2(Info2)
      setInfo3(Info3)
      setInfo1(Info1)


    }
    loadEmpresas();
  }, [])

  async function handleDelete(data){
    await api.delete(`principal/${data}`)

    const response = await api.get(`/principal`);


  }

  return (
    <div className="container">
      <Container className="col s12">
      {autorizado? (
          <>
          <h1 className="red-text">Todos os Conteúdos</h1>
          <hr/>
          <br/>
          <h6 className="grey-text">Conteudo 1</h6>
          <table className="highlight">
          <thead>
            <tr>
                <th className="center">titulo</th>
                <th className="center">Empresa</th>
                <th className="center">Telefone</th>
                <th className="center">Data de criação</th>
                <th className="center">Video</th>
                <th className="center">Editar</th>
                <th className="center">Conteudos</th>
                <th className="center">Deletar</th>
            </tr>
          </thead>

          <tbody>
          {info1.map(el => (
              <tr key={el.id}>
                <td>{el.titulo}</td>
                <td className="center">{el.empresa ? el.empresa : 'Nulo'}</td>
                <td className="center">{el.telefone? el.telefone: 'Nulo'}</td>
                <td className="center">{
                format(parseISO(el.created_at),
                "'Dia' dd 'de' MMM", {locale: pt})
                }</td>
                <td className="center">{el.videos? "Sim": "Nulo"}</td>
                <td>
                  <a href={`/editarEvento/${el.id}`}>
                    Editar
                  </a>
                </td>
                <td>
                  <a href={`/newPrincipal/${el.id}/files`}>
                    Conteudos
                  </a>
                </td>
                <td>
                  <button
                    className="center btn-floating btn-small waves-effect waves-light red"
                    title="Deletar Evento" onClick={()=> handleDelete(el.id)}>
                    <i class="material-icons">add</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <h6 className="grey-text">Conteudo 2</h6>
        <table className="highlight">
          <thead>
            <tr>
                <th className="center">titulo</th>
                <th className="center">Empresa</th>
                <th className="center">Data de criação</th>
                <th className="center">Imagens</th>
                <th className="center">Video</th>
                <th className="center">Editar</th>
                <th className="center">Conteudos</th>
                <th className="center">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {info2.map(el => (
              <tr key={el.id}>
                <td>{el.titulo}</td>
                <td className="center">{el.empresa ? el.empresa : 'Nulo'}</td>
                <td className="center">{
                  format(parseISO(el.created_at),
                  "'Dia' dd 'de' MMM", {locale: pt})
                }</td>
                <td className="center">{el.imagens? "Sim": "Nulo"}</td>
                <td className="center">{el.videos.url? "Sim": "Nulo"}</td>
                <td>
                  <a href={`/editarEvento/${el.id}`}>
                    Editar
                  </a>
                </td>
                <td>
                  <a href={`/newPrincipal/${el.id}/files`}>
                    Conteudos
                  </a>
                </td>
                <td>
                  <button
                    className="center btn-floating btn-small waves-effect waves-light red"
                    title="Deletar Evento" onClick={()=> handleDelete(el.id)}>
                    <i className="material-icons">add</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>

        <br/>
        <h6 className="grey-text">Conteudo 3</h6>
        <table className="highlight">
          <thead>
            <tr>
                <th className="center">titulo</th>
                <th className="center">Empresa</th>
                <th className="center">Data de criação</th>
                <th className="center">Editar</th>
                <th className="center">Conteudos</th>
                <th className="center">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {info3.map(el => (
              <tr key={el.id}>
                <td>{el.titulo}</td>
                <td className="center">{el.empresa ? el.empresa : 'Nulo'}</td>
                <td className="center">{
                  format(parseISO(el.created_at),
                  "'Dia' dd 'de' MMM", {locale: pt})
                }</td>
                <td>
                  <a href={`/editarEvento/${el.id}`}>
                    Editar
                  </a>
                </td>
                <td>
                  <a href={`/newPrincipal/${el.id}/files`}>
                    Conteudos
                  </a>
                </td>
                <td>
                  <button
                    className="center btn-floating btn-small waves-effect waves-light red"
                    title="Deletar Evento" onClick={()=> handleDelete(el.id)}>
                    <i class="material-icons">add</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
        ):(
          null
        )}
      </Container>
    </div>
  );
}
