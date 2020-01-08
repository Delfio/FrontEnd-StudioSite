import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import {
  List,
  DivImg,
  DivEmpresaDestaque,
  DivLogo,
  LogoIMG,
  DivInfo,
  DivEmpresas,
  ImgEmpresas,
  InfosEmpresas,
} from './styles';

export default function Empresas () {

  const [empresaDestaque, setEmpresaDestaque] = useState({});
  const [empresaNormal, setEmpresaNormal] = useState([]);

  const [video, setVideo] = useState({})

  useEffect(() => {
    async function loadEmpresas() {
      const response = await api.get('/empresas');
      setEmpresaDestaque(response.data.EmpresaDestaque);
      setEmpresaNormal(response.data.EmpresasNormais);

      const principal = await api.get('/principal');

      principal.data.map(el => (
        setVideo(el.Info3)
      ))
    }

    loadEmpresas()
  }, [])

  return (
    <div className="row">
      <div className="container">
        <div className="col s12">
          <div className="row center-align">
            <h4 className="">Empresas em Destaque</h4>
          </div>
          {/* Empresa Destaque */}
          <List key="kkkk">
            <li className="row">
              <a href="">
                <DivEmpresaDestaque className="col s12">
                  <DivImg
                    className="col s12 l6"
                    bg={empresaDestaque.imagem ? empresaDestaque.imagem.url: null}
                  >
                    <div
                      style={{
                        paddingLeft: 20,
                        position: 'relative',
                        padding: 10,
                        zIndex: 10,
                      }}
                    >
                      <DivLogo>
                        <LogoIMG
                          src={empresaDestaque.logo ? empresaDestaque.logo.url: null}
                          alt="logo"
                        />
                      </DivLogo>
                      <a
                        style={{
                          fontSize: 20,
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        href=""
                      >
                        {empresaDestaque.nome}
                      </a>
                    </div>
                  </DivImg>
                  <DivInfo className="col s12 l6">
                    <h3>{empresaDestaque.nome}</h3>
                    <p>
                      {empresaDestaque.descricao}
                    </p>
                    <a href="">
                      <i className="material-icons">phone</i>
                      {`(69) ${empresaDestaque.fone_contato} ${empresaDestaque.fone_contato2 ? `|| ${empresaDestaque.fone_contato2}` : ``}`}
                    </a>
                    <h4 className="hide-on-med-and-down">
                      {empresaDestaque.endereco}
                    </h4>
                    <h6 className="hide-on-large-only">{empresaDestaque.endereco}</h6>
                  </DivInfo>
                </DivEmpresaDestaque>
              </a>
            </li>
          </List>
          {/* Empresas Normais */}
          <List key="kkks">
            <h4
              style={{ marginTop: 35, marginBottom: 10 }}
              className="center"
            >
              Outras Empresas
            </h4>

            {empresaNormal.map(el => (
              <DivEmpresas key={el.id} className="col s12 l4">
                <a href={`empresa/${el.id}`}>
                  <div className="row" />
                  <div
                    style={{ paddingTop: 10, height: 124 }}
                    className="col l12 s4"
                  >
                    <ImgEmpresas src={el.logo ? el.logo.url : null} />
                  </div>
                  <InfosEmpresas className="col l12 s8">
                    <h5 className="center">{el.nome}</h5>
                    <p className="truncate black-text">
                      {el.descricao}
                    </p>
                    <a href="">
                      <i className="material-icons">phone</i>
                      {`(69) ${el.fone_contato} ${el.fone_contato2 ? `|| ${el.fone_contato2}` : ``}`}

                    </a>
                  </InfosEmpresas>
                  <div className="row" />
                </a>
              </DivEmpresas>
            ))}
{/*
            <DivEmpresas className="col s12 l4">
              <a href="">
                <div className="row" />
                <div
                  style={{ paddingTop: 10, height: 124 }}
                  className="col l12 s4"
                >
                  <ImgEmpresas src="https://company-profile-images.s3.amazonaws.com/images/71381/1182886/logo/carrefour-logo.png" />
                </div>
                <InfosEmpresas className="col l12 s8">
                  <h5 className="center">Carrefur</h5>
                  <p className="truncate black-text">
                    Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.
                    Richard McClintock,
                  </p>
                  <a href="">
                    <i className="material-icons">phone</i>
                    (69) 99301-4603
                  </a>
                </InfosEmpresas>
                <div className="row" />
              </a>
            </DivEmpresas> */}
          </List>
        </div>
        {video.video ? (
          <div className="row">
            <div className="col s12">
              <h4>Confira</h4>
              <div className="video-container">
                <iframe
                  width="853"
                  height="480"
                  src={video.video.link}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <section className="col s6 left">
                <h5 className="blue-text">{video.titulo}</h5>
              </section>
            </div>
          </div>
        ): null}
      </div>
    </div>
  );
}
