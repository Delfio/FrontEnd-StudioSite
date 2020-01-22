import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';

import api from '../../../../services/api';
// import { Container } from './styles';

export default function Table({ id, videos }) {

  const [video, setVideos] = useState([]);

  useEffect(() =>{
    async function load(){
      const response = await api.get(`principal/${id}`);
      setVideos(response.data.videos);
    }
    load();
  }, [videos])

  async function deleteVideo(data){
    await api.delete(`/principal/${id}/video/${data}`)

    const response = await api.get(`principal/${id}`);
    setVideos(response.data.videos);

    toast.success('Video deletado com sucesso')
  }

  return (
    <div className="row">
      <br/>
      <h5 className="grey-text"> Videos já cadastrados </h5>
        <table className="highlight centered">
          <thead>
            <tr>
                <th>id</th>
                <th>Titulo</th>
                <th>Empresa</th>
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
                <button title="Deletar Video" onClick={() => deleteVideo(el.id)} className="btn-floating btn-samall waves-effect waves-light red">
                  <i className="material-icons">block</i>
                </button>
              </td>
            </tr>

            ))}
          </tbody>
        </table>
    </div>
  );
}
