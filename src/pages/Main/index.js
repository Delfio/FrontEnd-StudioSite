/* // eslint-disable prettier/prettier */
import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { List, DivBannerDestaque, ImgBannerDestaque } from './styles';

import Banner from '../../components/Banners';
import Noticias from './Noticias';
import Empresas from './EmpresasDestaques';

export default class Main extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.slider');
      const instances = M.Slider.init(elems, {});
    });
  }

  render() {
    return (
      <>
        <Banner />
        <div className="row container">
          <div className="col s12 l6">
            <div className="video-container">
              <iframe
                width="853"
                height="480"
                src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <h3 className="hide-on-med-and-down">Studio.com</h3>
          </div>
          <List key="ddf">
            <div className="col s12 l6">
              <a href="">
                <li className="col l6 s12">
                  <DivBannerDestaque bg="" className="col s12">
                    <ImgBannerDestaque src="http://s2.glbimg.com/3XO10zRTz-e8deTSH6KN5ThAq2A=/e.glbimg.com/og/ed/f/original/2014/08/25/home_office.jpg" />
                  </DivBannerDestaque>
                  <h3>Conheça a HomeOffice</h3>
                </li>
              </a>

              <a href="">
                <li className="col l6 s12">
                  <DivBannerDestaque className="col s12">
                    <ImgBannerDestaque src="https://neilpatel.com/wp-content/uploads/2019/05/mulher-trabalhando-em-home-office.jpeg" />
                  </DivBannerDestaque>
                  <h3>Anuncie no nosso site</h3>
                </li>
              </a>

              <a href="">
                <li className="col l6 s6">
                  <DivBannerDestaque className="col s12">
                    <ImgBannerDestaque src="https://www.gazetadopovo.com.br/haus/wp-content/uploads/2019/07/23115546/home-office-estudio-cipo-fernanda-angelo-haus-8-1002x564.jpg" />
                  </DivBannerDestaque>
                  <h3>Conheça nosso trabalho</h3>
                </li>
              </a>

              <a href="">
                <li className="col l6 s6">
                  <DivBannerDestaque className="col s12">
                    <ImgBannerDestaque src="http://s2.glbimg.com/3XO10zRTz-e8deTSH6KN5ThAq2A=/e.glbimg.com/og/ed/f/original/2014/08/25/home_office.jpg" />
                  </DivBannerDestaque>
                  <h3>Empresas em destaque</h3>
                </li>
              </a>
            </div>
          </List>
          {/* DivBannerDestaque */}
        </div>

        <Noticias />
        <Empresas />
      </>
    );
  }
}
