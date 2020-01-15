import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { Container } from './styles';

export default function Classificados() {

  const [classificado, setClassificado] = useState([]);

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    async function ladClassificados() {
      const response = await api.get(`meusClassificaos`)
      setClassificado(response.data);
    }
    ladClassificados()
  },[])

  return (
    <div className="container">
      <Container className="col s12" >
        <h1 className="header red-text"> Confira seus Classificados </h1>
        <hr/>
        <table className="striped">
        <thead>
          <tr>
              <th>Titulo</th>
              <th>Publicação</th>
              <th>Status</th>
              <th>Ação</th>
          </tr>
        </thead>

        <tbody>

            {classificado.map( el => (
              <tr>
                <td>{el.titulo}</td>
                <td>{el.created_at}</td>
                <td>{el.aprovado ? (
                  <i class="material-icons small green-text">done</i>
                ): (
                  <i class="material-icons small red-text">block</i>
                )}</td>
                <td>{
                  <Link to={`editClassificado/${el.id}`}>
                    editar
                  </Link>
                }</td>
              </tr>
            ))}
        </tbody>
      </table>
      </Container>
    </div>
  );
}
