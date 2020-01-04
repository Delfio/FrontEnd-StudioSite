import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  TituloEmpresa,
  List2,
  DivBannerDestaque,
  ImgBannerDestaque,
  TtiutloEvento,
} from './styles';

export default function EmpresasDestaque() {

  const [empDestaque, setEmpDestaque] = useState([])


  useEffect(() => {
    async function loadEmpresas() {
      const response = await api.get('/empresaDestaque');

      setEmpDestaque(response.data);
    }

    loadEmpresas();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="row">
            <h4 className="blue-text"> Empresas destaque </h4>
            <hr />
          </div>
          <List2 key="sdfd">
            {empDestaque.map(el => (
              <li key={el.id} className="col s12 l4">
                <DivBannerDestaque className="col s5 l12">
                  <ImgBannerDestaque
                    style={{ marginTop: -16 }}
                    src={el.imagem.url}
                    alt="Americanas"
                  />
                </DivBannerDestaque>
                <section className="col s7 l12">
                  <TituloEmpresa className="black-text">{el.nome}</TituloEmpresa>
                  <p className="hide-on-small-only">
                    {el.descricao}
                  </p>
                  <label htmlFor="">{el.endereco}</label>
                  <p>
                    <a href={`/empresasDestaque/${el.id}`}>Ver Mais</a>
                  </p>
                </section>
              </li>
            ))}
          </List2>
        </div>
      </div>
    </div>
  );
}
