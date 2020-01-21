import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

import { Container } from './styles';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function TodosOsEventos() {

  const [autorizado, setAutorizacao] = useState(false)
  const [eventos, setEventos] = useState([])

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if(!user.ADM){
      setAutorizacao(false);
      return
    }else {
      setAutorizacao(true);
    }
    async function loadEmpresas() {
      const response = await api.get(`/eventos`);
      setEventos(response.data);
    }
    loadEmpresas();
  }, [])

  async function handleDelete(data){
    await api.delete(`eventos/${data}`)

    const response = await api.get(`/eventos`);
      setEventos(response.data);
  }

  return (
    <div className="container">
      <Container className="col s12">
      {autorizado? (
          <>
          <h1 className="red-text">Todos os eventos</h1>
          <hr/>
          <br/>
          <br/>
          <table className="highlight">
          <thead>
            <tr>
                <th className="center">titulo</th>
                <th className="center">Fone de contato</th>
                <th className="center">Responsável</th>
                <th className="center">Data</th>
                <th className="center">Data de criação</th>
                <th className="center">Imagem principal</th>
                <th className="center">Editar</th>
                <th className="center">Deletar</th>
            </tr>
          </thead>

          <tbody>
            {eventos.map(el => (
              <tr key={el.id}>
                <td>{el.titulo}</td>
                <td className="center">{el.phone_contato}</td>
                <td className="center">{el.responsavel || `Null`}</td>
                <td className="center">{el.data_evento}</td>
                <td>{
                format(parseISO(el.created_at),
                "'Dia' dd 'de' MMM", {locale: pt})
                }</td>
                <td className="center">{el.imagem? `Sim` : `Não`}</td>
                <td>
                  <a href={`/editarEvento/${el.id}`}>
                    editar
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
        </>
        ):(
          null
        )}
      </Container>
    </div>
  );
}
