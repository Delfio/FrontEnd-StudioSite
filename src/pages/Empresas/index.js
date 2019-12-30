import React, { Component } from 'react';

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

export default class Empresas extends Component {
  render() {
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
                      bg="https://i.ytimg.com/vi/c7HzzfMaAAI/maxresdefault.jpg"
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
                            src="https://company-profile-images.s3.amazonaws.com/images/71381/1182886/logo/carrefour-logo.png"
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
                          Calhas Americas
                        </a>
                      </div>
                    </DivImg>
                    <DivInfo className="col s12 l6">
                      <h3>Calhas Americas</h3>
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections
                      </p>
                      <a href="">
                        <i className="material-icons">phone</i>
                        (69) 3226-2460 || (69) 98471-2970
                      </a>
                      <h4 className="hide-on-med-and-down">
                        Rua Ámerica, 2476
                      </h4>
                      <h6 className="hide-on-large-only">Rua Ámerica, 2476</h6>
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
              </DivEmpresas>

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
              </DivEmpresas>

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
              </DivEmpresas>
            </List>
          </div>
          <div className="row">
            <div className="col s12">
              <h4>Confira</h4>
              <div className="video-container">
                <iframe
                  width="853"
                  height="480"
                  src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
