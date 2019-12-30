import React, { Component } from 'react';

import Banner from '../../components/Banners';

import { Container, ImgAnuncio, Parceiros } from './styles';

export default class Classificados extends Component {
  render() {
    return (
      <div className="row">
        <div className="container">
          <Banner />

          <div className="col l8 s12">
            <Container key="name">
              <a href="">
                <li className="row">
                  <div className="col s12">
                    <section className="col l4 s5">
                      <ImgAnuncio
                        src="data:image/jpeg;base64,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"
                        alt="testando123"
                      />
                    </section>
                    <section className="col l5 hide-on-med-and-down">
                      <h2 className="black-text ">Cadeira de jantar</h2>
                      <label htmlFor="h5">
                        Rua Juazeiro, 6763 Bairro Lagoinha
                      </label>
                    </section>
                    <section className="col l3 hide-on-med-and-down">
                      <p className="black-text">Cadeira de Jantar</p>
                      <h5 className="center">R$250,00</h5>
                    </section>
                    <section className="col s7 hide-on-large-only">
                      <h6 className="black-text">Cadeira De Jantar</h6>
                      <h5>R$ 250,00</h5>
                      <label className="grey-text" htmlFor="">
                        Juazeiro, 6763
                      </label>
                    </section>
                  </div>
                </li>
              </a>

              <a href="">
                <li className="row">
                  <div className="col s12">
                    <section className="col l4 s5">
                      <ImgAnuncio
                        src="https://tokstok.vteximg.com.br/arquivos/ids/1741867-670-670/Mesa-135x80-Nozes-nozes-Noah.jpg?v=637000162869730000"
                        alt="testando123"
                      />
                    </section>
                    <section className="col l5 hide-on-med-and-down">
                      <h2 className="black-text">Mesa de jantar</h2>
                      <label htmlFor="h5">
                        Rua Juazeiro, 6763 Bairro Lagoinha
                      </label>
                    </section>
                    <section className="col l3 hide-on-med-and-down">
                      <h5 className="center">R$350,00</h5>
                    </section>
                    <section className="col s7 hide-on-large-only">
                      <h6 className="black-text">Cadeira De Jantar</h6>
                      <h5>R$ 250,00</h5>
                      <label className="grey-text" htmlFor="">
                        Juazeiro, 6763
                      </label>
                    </section>
                  </div>
                </li>
              </a>

              <a href="">
                <li className="row">
                  <div className="col s12">
                    <section className="col l4 s5">
                      <ImgAnuncio
                        src="http://automotive.cdn.cl9.net.br/fotos/P_noticia_29106.jpg"
                        alt="testando123"
                      />
                    </section>
                    <section className="col l5 hide-on-med-and-down">
                      <h2 className="black-text">Mesa de jantar</h2>
                      <label htmlFor="h5">
                        Rua Juazeiro, 6763 Bairro Lagoinha
                      </label>
                    </section>
                    <section className="col l3 hide-on-med-and-down">
                      <h5 className="center">R$350,00</h5>
                    </section>
                    <section className="col s7 hide-on-large-only">
                      <h6 className="black-text">Cadeira De Jantar</h6>
                      <h5>R$ 250,00</h5>
                      <label className="grey-text" htmlFor="">
                        Juazeiro, 6763
                      </label>
                    </section>
                  </div>
                </li>
              </a>

              <a href="">
                <li className="row">
                  <div className="col s12">
                    <section className="col l4 s5">
                      <ImgAnuncio
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgD4eu9OhXT-Xm5FRukiLh-Wg-PG_ZuLCPnyttg0PJMuXiNDt&s"
                        alt="testando123"
                      />
                    </section>
                    <section className="col l5 hide-on-med-and-down">
                      <h2 className="black-text">Mesa de jantar</h2>
                      <label htmlFor="h5">
                        Rua Juazeiro, 6763 Bairro Lagoinha
                      </label>
                    </section>
                    <section className="col l3 hide-on-med-and-down">
                      <h5 className="center">R$350,00</h5>
                    </section>
                    <section className="col s7 hide-on-large-only">
                      <h6 className="black-text">Cadeira De Jantar</h6>
                      <h5>R$ 250,00</h5>
                      <label className="grey-text" htmlFor="">
                        Juazeiro, 6763
                      </label>
                    </section>
                  </div>
                </li>
              </a>

              <a href="">
                <li className="row">
                  <div className="col s12">
                    <section className="col l4 s5">
                      <ImgAnuncio
                        src="data:image/jpeg;base64,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"
                        alt="testando123"
                      />
                    </section>
                    <section className="col l5 hide-on-med-and-down">
                      <h2 className="black-text">Mesa de jantar</h2>
                      <label htmlFor="h5">
                        Rua Juazeiro, 6763 Bairro Lagoinha
                      </label>
                    </section>
                    <section className="col l3 hide-on-med-and-down">
                      <h5 className="center">R$350,00</h5>
                    </section>
                    <section className="col s7 hide-on-large-only">
                      <h6 className="black-text">Cadeira De Jantar</h6>
                      <h5>R$ 250,00</h5>
                      <label className="grey-text" htmlFor="">
                        Juazeiro, 6763
                      </label>
                    </section>
                  </div>
                </li>
              </a>
            </Container>
          </div>

          <div className="col l3 hide-on-med-and-down">
            <div className="card">
              <div className="right-align blue">
                <Parceiros>Confira nossos parceiros</Parceiros>
              </div>
              <section style={{ margin: 25 }} className="card-image">
                <img
                  className="responsive-img"
                  src="https://logodownload.org/wp-content/uploads/2018/09/claro-empresas-logo-01.png"
                  alt=""
                />
              </section>
            </div>
          </div>

          <div className="col l3 hide-on-med-and-down">
            <iframe
              src="https://giphy.com/embed/m1Wv2B6Wds3du"
              title="propaganda-teste"
              width="320"
              height="480"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}
