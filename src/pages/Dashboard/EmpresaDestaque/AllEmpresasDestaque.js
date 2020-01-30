import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

import { Container } from './styles';

export default function AllEmpresas() {
  const [autorizado, setAutorizacao] = useState(false);
  const [empresas, setEmpresas] = useState([]);

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    if (!user.ADM) {
      setAutorizacao(false);
      return;
    }
    setAutorizacao(true);

    async function loadEmpresas() {
      const response = await api.get(`/empresaDestaque`);
      setEmpresas(response.data);
    }
    loadEmpresas();
  }, []);

  async function handleDelete(data) {
    await api.delete(`empresaDestaque/${data}`);

    const empresas = await api.get(`/empresaDestaque`);
    setEmpresas(empresas.data);
  }

  return (
    <div className="container">
      <Container className="col s12">
        {autorizado ? (
          <>
            <h1 className="red-text">Todas as Em destaque</h1>
            <hr />
            <br />
            <h6>. Confira todas as Empresas em Destaque</h6>
            <br />
            <table className="highlight centered">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>Fone de contato</th>
                  <th>Imagem</th>
                  <th>Arquivos</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>

              <tbody>
                {empresas.map(el => (
                  <tr key={el.id}>
                    <td>{el.nome}</td>
                    <td>{el.endereco}</td>
                    <td>{el.fone_contato}</td>
                    <td>{el.imagem ? `Sim` : 'Não'}</td>
                    <td>
                      <a href={`/novaEmpresaDestaque/${el.id}/files`}>
                        Detalhes
                      </a>
                    </td>
                    <td>
                      <a href={`/editarEmpresaDestaque/${el.id}`}>editar</a>
                    </td>
                    <td>
                      <button
                        className="center btn-floating btn-small waves-effect waves-light red"
                        title="Deletar Evento"
                        onClick={() => handleDelete(el.id)}
                      >
                        <i className="material-icons">remove</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <h4>Legenda:</h4>
            <div className="row">
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                className="col s6"
              >
                <i className="material-icons small green-text">star</i>
                <p className="black-text"> = Destaque</p>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                className="col s6"
              >
                <i className="material-icons small red-text">star_border</i>
                <p className="black-text"> = Normal</p>
              </div>
            </div>
            <hr />
          </>
        ) : null}
      </Container>
    </div>
  );
}
