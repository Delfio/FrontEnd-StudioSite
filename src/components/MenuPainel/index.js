import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from 'react-collapsible-component';
import { signOut } from '../../store/modules/auth/actions';

export default function MenuPainel() {
  const dispatch = useDispatch();

  const adm = useSelector(state => state.auth.adm);

  function deslogar() {
    dispatch(signOut());
  }

  return (
    <>
      <ul id="slide-out" className="sidenav sidenav-fixed grey lighten-4">
        <li className="white">
          <a href="/painel">
            <i className="red-text material-icons">home</i>
            {adm ? 'Painel ADM' : 'Painel'}
          </a>
        </li>
        <li className="white">
          <a href="/">Retornar ao site</a>
        </li>
        <li>
          <div className="divider" />
        </li>

        <li>
          <CollapsibleComponent>
            <CollapsibleHead className="additionalClassForHead">
              Classificados
            </CollapsibleHead>
            <CollapsibleContent className="additionalClassForContent">
              <ul style={{ alignItems: 'center' }}>
                <li>
                  <Link to="/postClassificado">
                    <i className="material-icons  cyan-text">input</i>
                    <p>Novo</p>
                  </Link>
                </li>
                <li>
                  <Link to="/meusClassificados">
                    <i className="material-icons cyan-text">local_offer</i>
                    <p>Meus Classificados </p>
                  </Link>
                </li>
                <li className={`${adm ? null : 'hide'}`}>
                  <Link to="/allClassificados">
                    <i className="material-icons cyan-text">view_list</i>
                    <p>Todos os Classificados</p>
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </CollapsibleComponent>
        </li>

        <li className={`divider ${adm ? null : 'hide'}`}>
          <hr />
        </li>

        <li className={`${adm ? null : 'hide'}`}>
          <CollapsibleHead showContentAboveButton>Eventos</CollapsibleHead>
          <CollapsibleContent showContentAboveButton>
            <ul style={{ alignItems: 'center' }}>
              <li>
                <Link to="/novoEvento">
                  <i className="material-icons orange-text">event_note</i>
                  <p>Novo Evento</p>
                </Link>
              </li>
              <li>
                <Link to="/allEventos">
                  <i className="material-icons orange-text">event_available</i>
                  <p>Todos os Eventos</p>
                </Link>
              </li>
            </ul>
          </CollapsibleContent>
        </li>

        <li className={`divider ${adm ? null : 'hide'}`}>
          <hr />
        </li>

        <li className={`${adm ? null : 'hide'}`}>
          <CollapsibleHead showContentAboveButton>
            Empresas em Destaque
          </CollapsibleHead>
          <CollapsibleContent showContentAboveButton>
            <ul style={{ alignItems: 'center' }}>
              <li>
                <Link to="/novaEmpresaDestaque">
                  <i className="material-icons green-text">business_center</i>
                  <p>Novo</p>
                </Link>
              </li>
              <li>
                <Link to="/allEmpresaDestaque">
                  <i className="material-icons green-text">business</i>
                  <p>Todos</p>
                </Link>
              </li>
            </ul>
          </CollapsibleContent>
        </li>

        <li className={`divider ${adm ? null : 'hide'}`}>
          <hr />
        </li>

        <li className={`${adm ? null : 'hide'}`}>
          <CollapsibleHead showContentAboveButton>
            Guia Empresarial
          </CollapsibleHead>
          <CollapsibleContent showContentAboveButton>
            <ul style={{ alignItems: 'center' }}>
              <li>
                <Link to="/novaEmpresa">
                  <i className="material-icons pink-text">assessment</i>
                  <p>Novo</p>
                </Link>
              </li>
              <li>
                <Link to="/allEmpresa">
                  <i className="material-icons pink-text">assignment</i>
                  <p>Todos</p>
                </Link>
              </li>
            </ul>
          </CollapsibleContent>
        </li>

        <li className={`divider ${adm ? null : 'hide'}`}>
          <hr />
        </li>

        <li className={`${adm ? null : 'hide'}`}>
          <CollapsibleHead showContentAboveButton>Noticias</CollapsibleHead>
          <CollapsibleContent showContentAboveButton>
            <ul style={{ alignItems: 'center' }}>
              <li>
                <Link to="/novaNews">
                  <i className="material-icons blue-text">new_releases</i>
                  <p>Novo Notícia</p>
                </Link>
              </li>
              <li>
                <Link to="/newsList">
                  <i className="material-icons blue-text">view_list</i>
                  <p>Noticias Principais</p>
                </Link>
              </li>
              <li>
                <Link to="/allNews">
                  <i className="material-icons blue-text">autorenew</i>
                  <p>Todos as Notícias</p>
                </Link>
              </li>
            </ul>
          </CollapsibleContent>
        </li>

        <li className={`divider ${adm ? null : 'hide'}`}>
          <hr />
        </li>

        <li className={`${adm ? null : 'hide'}`}>
          <CollapsibleHead showContentAboveButton>
            Conteúdo Principal
          </CollapsibleHead>
          <CollapsibleContent showContentAboveButton>
            <ul style={{ alignItems: 'center' }}>
              <li>
                <Link to="/conteudoPrincipal">
                  <i className="material-icons red-text">domain</i>
                  <p>Novo Conteúdo</p>
                </Link>
              </li>
              <li>
                <Link to="/allConteudoPrincipal">
                  <i className="material-icons red-text">
                    format_list_bulleted
                  </i>
                  <p>Todos os Conteúdos</p>
                </Link>
              </li>
            </ul>
          </CollapsibleContent>
        </li>

        <li className="divider">
          <hr />
        </li>

        <li>
          <CollapsibleHead showContentAboveButton>Perfil</CollapsibleHead>
          <CollapsibleContent showContentAboveButton>
            <ul style={{ alignItems: 'center' }}>
              <li>
                <Link to="/meuPerfil">
                  <i className="material-icons red-text">recent_actors</i>
                  <p>Meu Perfil</p>
                </Link>
              </li>
              <li>
                <a href="#" onClick={deslogar}>
                  <i className="material-icons red-text">exit_to_app</i>
                  <p className="red-text">Sair</p>
                </a>
              </li>
            </ul>
          </CollapsibleContent>
        </li>
      </ul>
      <a
        href="#"
        data-target="slide-out"
        className="sidenav-trigger hide-on-large-only"
      >
        <i className="material-icons">menu</i>
      </a>
    </>
  );
}
