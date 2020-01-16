import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { Container } from './styles';

export default function AllClassificados() {

  const [autorizado, setAutorizacao] = useState(false)
  const [classificados, setClassificados] = useState([])

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if(!user.ADM){
      setAutorizacao(false);
      return
    }else {
      setAutorizacao(true);

    }

    async function loadClassificados() {
      const response = await api.get(`/admin/classificados`);
      setClassificados(response.data);
    }
    loadClassificados();
  }, [autorizado])

  async function handleReject(data){
    const response = await api.put(`/admin/classificado/reprovar/${data}`);

    if(response.status == 200){
      const classificado = await api.get(`/admin/classificados`);
      setClassificados(classificado.data);
    }
  }

  async function handleAccept(data){
    const response = await api.put(`/admin/classificado/aprovar/${data}`);

    if(response.status == 200){
      const classificado = await api.get(`/admin/classificados`);
      setClassificados(classificado.data);
    }
  }

  // /admin/classificados
  return (
    <div className="container">
      <Container className="col s12">
        {autorizado? (
          <>
          <h1 className="red-text">Todos os classificados</h1>
          <hr/>
          <br/>
          <h6>. Aprove ou delete os classificados</h6>
          <br/>
          <table className="highlight centered">
          <thead>
            <tr>
                <th>Autor</th>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Imagens</th>
                <th>Status</th>
                <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {classificados.map(el => (
              <tr key={el.id}>
                <td>{el.user.username}</td>
                <td>{el.titulo}</td>
                <td>{`R$: ${el.preco}`}</td>
                <td>{el.imagens.length}</td>
                <td>{el.aprovado? (
                  <button onClick={()=>handleReject(el.id)} className="btn-floating btn-samall waves-effect waves-light green">
                    <i className="material-icons">done</i>
                  </button>
                ): (
                  <button onClick={() => handleAccept(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                    <i className="material-icons">block</i>
                  </button>
                )}</td>
                <td>
                  <Link to={`/previewClassificado/${el.id}`}>
                    Detalhes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <h4>Legenda:</h4>
        <div className="row">
          <div style={{display: 'flex', alignItems: 'center'}} className="col s6">
            <i className="material-icons small green-text">done</i>
            <p className="black-text"> = Aprovado</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}} className="col s6">
            <i className="material-icons small red-text">block</i>
            <p className="black-text"> = Ainda não aprovado</p>
          </div>
        </div>
        <hr/>
        </>
        ):(
          null
        )}
      </Container>
    </div>
  );
}
