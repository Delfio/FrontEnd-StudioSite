import React, { Component } from 'react';

import {
  TtiutloEvento,
  PopularPosts,
  List2,
  DivBannerDestaque,
  ImgBannerDestaque,
  List,
} from './styles';

export default class Noticias extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l9 m12">
            <div className="row">
              <h4 className="blue-text"> Confira Os ultimos eventos </h4>
              <hr />
            </div>
            <List2 style={{ alignItems: 'center' }} key="sdfsd">
              <div className="col s12 l12">
                <li className="row">
                  <DivBannerDestaque className="col s5 l4">
                    <ImgBannerDestaque src="https://s2.glbimg.com/H_45kLJpc7DQNsqXbmuGcz6urB0=/0x0:897x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/0/n/rsLYWvToaO1Q5Ty6qAYw/whatsapp-image-2019-10-21-at-10.23.02.jpeg" />
                  </DivBannerDestaque>
                  <section className="col s7 l8">
                    <TtiutloEvento className="black-text">
                      Nasa promove Hackaton em Porto Velho
                    </TtiutloEvento>
                    <p className="hide-on-small-only">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here,
                    </p>
                    <label htmlFor="">25 de Março</label>
                    <p>
                      <a href="">Ver Mais</a>
                    </p>
                  </section>
                </li>

                <li className="row">
                  <DivBannerDestaque className="col s5 l4">
                    <ImgBannerDestaque src="https://s2.glbimg.com/H_45kLJpc7DQNsqXbmuGcz6urB0=/0x0:897x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/0/n/rsLYWvToaO1Q5Ty6qAYw/whatsapp-image-2019-10-21-at-10.23.02.jpeg" />
                  </DivBannerDestaque>
                  <section className="col s7 l8">
                    <TtiutloEvento className="black-text">
                      Nasa promove Hackaton em Porto Velho
                    </TtiutloEvento>
                    <p className="hide-on-small-only">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here,
                    </p>
                    <label htmlFor="">25 de Março</label>
                    <p>
                      <a href="">Ver Mais</a>
                    </p>
                  </section>
                </li>

                <li className="row">
                  <DivBannerDestaque className="col s5 l4">
                    <ImgBannerDestaque src="https://s2.glbimg.com/H_45kLJpc7DQNsqXbmuGcz6urB0=/0x0:897x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/0/n/rsLYWvToaO1Q5Ty6qAYw/whatsapp-image-2019-10-21-at-10.23.02.jpeg" />
                  </DivBannerDestaque>
                  <section className="col s7 l8">
                    <TtiutloEvento className="black-text">
                      Nasa promove Hackaton em Porto Velho
                    </TtiutloEvento>
                    <p className="hide-on-small-only">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here,
                    </p>
                    <label htmlFor="">25 de Março</label>
                    <p>
                      <a href="">Ver Mais</a>
                    </p>
                  </section>
                </li>

                <li className="row">
                  <DivBannerDestaque className="col s5 l4">
                    <ImgBannerDestaque src="https://quantocustaviajar.com/blog/wp-content/uploads/2017/09/rockefeller-center.jpg" />
                  </DivBannerDestaque>
                  <section className="col s7 l8">
                    <TtiutloEvento className="black-text">
                      Nasa promove Hackaton em Porto Velho
                    </TtiutloEvento>
                    <p className="hide-on-small-only">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised
                    </p>
                    <label htmlFor="">25 de Março</label>
                    <p>
                      <a href="">Ver Mais</a>
                    </p>
                  </section>
                </li>
              </div>
            </List2>
          </div>
          <div className="col l3 hide-on-med-and-down">
            <div className="card">
              <div className="right-align blue">
                <PopularPosts>Confira nossos parceiros</PopularPosts>
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
