import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

import { Container } from './styles';

export default function AllEmpresas() {
  const [autorizado, setAutorizacao] = useState(false)
  const [empresas, setEmpresas] = useState([])

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if(!user.ADM){
      setAutorizacao(false);
      return
    }else {
      setAutorizacao(true);

    }

    async function loadEmpresas() {
      const response = await api.get(`/admin/empresas`);
      setEmpresas(response.data);
    }
    loadEmpresas();
  }, [])

  async function handleRemoveDestaque(data){
    const response = await api.put(`empresas/${data}`, {
      destaque: 0
    });

    if(response.status == 200){
      const empresas = await api.get(`/admin/empresas`);
      setEmpresas(empresas.data);
    }
  }

  async function handleAddDestaque(data){
    const response = await api.put(`empresas/${data}`, {
      destaque: 1
    });

    if(response.status == 200){
      const empresas = await api.get(`/admin/empresas`);
      setEmpresas(empresas.data);
    }
  }

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
                <th>Nome</th>
                <th>Endereço</th>
                <th>Fone de contato</th>
                <th>Fone 2</th>
                <th>Email</th>
                <th>Destaque</th>
                <th>Arquivos</th>
                <th>Editar</th>
            </tr>
          </thead>

          <tbody>
            {empresas.map(el => (
              <tr key={el.id}>
                <td>{el.nome}</td>
                <td>{el.endereco}</td>
                <td>{el.fone_contato}</td>
                <td>{el.fone_contato2 || `Null`}</td>
                <td>{el.email_contato || `Null`}</td>
                <td>{el.destaque? (
                  <button title="Tirar o detaque" onClick={()=>handleRemoveDestaque(el.id)} className="btn-floating btn-samall waves-effect waves-light green">
                    <i className="material-icons">star</i>
                  </button>
                ): (
                  <button title="Colocar em destaque" onClick={() => handleAddDestaque(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                    <i className="material-icons">star_border</i>
                  </button>
                )}</td>
                <td>
                  <a href={`/novaEmpresa/${el.id}/files`}>
                    Detalhes
                  </a>
                </td>
                <td>
                  <a href={`/editarEmpresa/${el.id}`}>
                    editar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <h4>Legenda:</h4>
        <div className="row">
          <div style={{display: 'flex', alignItems: 'center'}} className="col s6">
            <i className="material-icons small green-text">star</i>
            <p className="black-text"> = Destaque</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}} className="col s6">
            <i className="material-icons small red-text">star_border</i>
            <p className="black-text"> = Normal</p>
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
