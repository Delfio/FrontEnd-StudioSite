/* // eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { List, DivBannerDestaque, ImgBannerDestaque } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { routePrivate } from '../../store/modules/auth/actions'

// import Menu from '../../components/Header';
// import Footer from '../../components/Footer';

import api from '../../services/api';

import Banner from '../../components/Banners';
import Noticias from './Noticias';
import Empresas from './EmpresasDestaques';


export default function Main() {
  const dispatch = useDispatch();
  const isPrivate = useSelector(state => state.auth.isPrivate);

  const [infos, setInfos] = useState([])
  const [link, setLink] = useState('');

  useEffect(() => {
    async function loadPrincipal(){
      const response = await api.get('/principal')
      response.data.map(item => (
        setLink(item.Info1.video),
        setInfos(item.Info2)
      ))
    }

    function loadPrivate() {
      dispatch(routePrivate(false))
    }
    loadPrivate();

    loadPrincipal();
  },[])

  return (
    <>
      <Banner />

      <div className="row container">
        <div className="col s12 l6">
          <div className="video-container">
            <iframe
              title={link.title}
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
