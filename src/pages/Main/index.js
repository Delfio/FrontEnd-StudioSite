/* // eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { List, DivBannerDestaque, ImgBannerDestaque } from './styles';

import api from '../../services/api';

import Banner from '../../components/Banners';
import Noticias from './Noticias';
import Empresas from './EmpresasDestaques';


export default function Main() {

  const [infos, setInfos] = useState([])
  const [link, setLink] = useState('');

  useEffect(() => {
    async function loadPrincipal(){
      const response = await api.get('/principal')
      const data = response.data.map(item => (
        // console.log(item.Info1.video),
        setLink(item.Info1.video),
        setInfos(item.Info2)
      ))
    }
    loadPrincipal();
  },[])

  return (
    <>
    {/* {infos.map(item => (
      console.log(item)
    ))} */}
      <Banner />

      <div className="row container">
        <div className="col s12 l6">
          <div className="video-container">
            <iframe
              width="853"
              height="480"
              src={link.link}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <h3 className="hide-on-med-and-down">Studio.com</h3>
        </div>
        <List key="ddf">
          <div className="col s12 l6">
            {
              infos.map(info => (
                <a key={info.id} href={`/principal/${info.id}`}>
                  <li className="col l6 s12">
                    <DivBannerDestaque bg="" className="col s12">
                      <ImgBannerDestaque src={info.imagem.url} />
                    </DivBannerDestaque>
                    <h3>{info.titulo}</h3>
                  </li>
                </a>
              ))
            }
          </div>
        </List>
        {/* DivBannerDestaque */}
      </div>

      <Noticias />
      <Empresas />
    </>
  );
}
