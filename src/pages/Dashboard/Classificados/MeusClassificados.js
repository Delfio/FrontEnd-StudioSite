import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { Container } from './styles';

export default function MyClassificados() {

  const [classificado, setClassificado] = useState([]);

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
              <tr key={el.id}>
                <td>{el.titulo}</td>
                <td>{el.created_at}</td>
                <td>{el.aprovado ? (
                  <i className="material-icons small green-text">done</i>
                ): (
                  <i className="material-icons small red-text">block</i>
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
        <p>Caso seu anuncio esteja demorando para ser aceito, Favor Verifique se o mesmo não
        contém alguma informação errada.
        </p>
      </Container>
    </div>
  );
}
