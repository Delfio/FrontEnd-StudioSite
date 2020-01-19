import React, {useEffect, useState} from 'react';

import api from '../../../../services/api';
// import { Container } from './styles';

export default function Files({id, videos, atividades}) {


  const [servico, setServicos] = useState([]);
  const [video, setVideos] = useState([]);


  useEffect(() =>{
    async function load(){
      const response = await api.get(`empresas/${id}`);
      const esmpresa = response.data.Empresas[0]
      setVideos(esmpresa.videos);
      setServicos(esmpresa.servicos)
    }
    load();
  }, [])

//Atualizar em tempo real as atividades
  useEffect(() => {
    async function loadAtividades(){
      console.log('ta aquii')
      const response = await api.get(`empresas/${id}`);
      const esmpresa = response.data.Empresas[0]
      setServicos(esmpresa.servicos)
      setVideos(esmpresa.videos);
    }
    loadAtividades();

  }, [atividades, videos])


  async function deleteServico(data){
    await api.delete(`empresas/servico/${data}`)

    const response = await api.get(`empresas/${id}`);
    const esmpresa = response.data.Empresas[0];
    setServicos(esmpresa.servicos)
  }

  async function deleteVideo(data){
    await api.delete(`/empresas/video/${data}`)

    const response = await api.get(`empresas/${id}`);
    const esmpresa = response.data.Empresas[0];

    setVideos(esmpresa.videos)
  }

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="center blue-text">Conteúdos já cadastrados</h2>
        <h5 className="grey-text"> Atividades cadastradas </h5>
        <br/>
        <table className="highlight centered">
          <thead>
            <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Editar</th>
                <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {servico.map(el => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.nome}</td>
              <td>{el.descricao}</td>
              <td>
                <a href={`editAtividade/${el.id}`}>
                  Editar
                </a>
              </td>
              <td>
                <button onClick={() => deleteServico(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                  <i className="material-icons">block</i>
                </button>
              </td>
            </tr>

            ))}
          </tbody>
        </table>
        <br/>
        <h5 className="grey-text"> Videos já cadastrados </h5>
        <br/>
        <table className="highlight centered">
          <thead>
            <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Descrição</th>
                <th>Link</th>
                <th>Editar</th>
                <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {video.map(el => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.titulo}</td>
              <td>{el.descricao || `Nulo`}</td>
              <td>{el.link}</td>
              <td>
                <a href={`editVideo/${el.id}`}>
                  Editar
                </a>
              </td>
              <td>
                <button onClick={() => deleteVideo(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                  <i className="material-icons">block</i>
                </button>
              </td>
            </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
