import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Main';
import Noticias from '../pages/Noticias';
import Classificados from '../pages/Classificados';
import Eventos from '../pages/Eventos';
import Empresas from '../pages/Empresas';

import Entrar from '../pages/Auth/Entrar';
import Registrar from '../pages/Auth/Registrar';

import Dashboard from '../pages/Dashboard/index';

//Classificado
import PostClassificado from '../pages/Dashboard/Classificados';
import ImageClassificado from '../pages/Dashboard/Classificados/FileInput';
import MeusClassificados from '../pages/Dashboard/Classificados/MeusClassificados';

import EditarClassificado from '../pages/Dashboard/Classificados/EditarClassificado';
import EditarImagem from '../pages/Dashboard/Classificados/editarImagem';
import TodosOsClassificados from '../pages/Dashboard/Classificados/TodosOsClassificados';

import PreviewClassificado from '../pages/Dashboard/Classificados/PreviewClassificado';

/* Classificado */

/* Empresas */
import PostEmpresa from '../pages/Dashboard/Empresas';

import FilesEmpresa from '../pages/Dashboard/Empresas/Files';
import EditFile from '../pages/Dashboard/Empresas/EditarImagem';
import EditarAtividade from '../pages/Dashboard/Empresas/EditarAtividade';
import EditarVideo from '../pages/Dashboard/Empresas/EditarVideo';

/* Empresas */

/*Details */

import DetailsClassificado from '../pages/Details/Classificado';

/*Details */


export default function Routes() {
  return (
    <Switch>
{/*Site */}
      <Route path="/" exact component={Home} />
      <Route path="/Noticias" component={Noticias} />
      <Route path="/Classificados" component={Classificados} />
      <Route path="/Eventos" component={Eventos} />
      <Route path="/Empresas" component={Empresas} />

      <Route path="/registrar" component={Registrar} />
      <Route path="/entrar" component={Entrar} painelControlle />


      <Route path="/painel" component={Dashboard} isPrivate />
{/*Site */}

{/* Details */}

      <Route path="/classificado/:id" component={DetailsClassificado} />


{/* Details */}

{/*Classificado PAINEL */}
      <Route path="/postClassificado" exact component={PostClassificado} isPrivate />
      <Route path="/postClassificado/:id/:user_id" exact component={ImageClassificado} isPrivate />


      <Route path="/meusClassificados" exact component={MeusClassificados} isPrivate />
      <Route path="/editClassificado/:id" exact component={EditarClassificado} isPrivate />
      <Route path="/editClassificado/:id/editarImagem/:imagem_id" exact component={EditarImagem} isPrivate />

      <Route path="/editClassificado/postClassificado/:id/:user_id" exact component={ImageClassificado} isPrivate />
      <Route path="/allClassificados" exact component={TodosOsClassificados} isPrivate />

      <Route path="/previewClassificado/:id" exact component={PreviewClassificado} isPrivate />
{/*Classificado */}

{/* Empresa Painel */}
      <Route path="/novaEmpresa" exact component={PostEmpresa} isPrivate />
      <Route path="/novaEmpresa/:id/files" exact component={FilesEmpresa} isPrivate />
      <Route path="/novaEmpresa/:id/editarImagem/Empresa/:imagem_id" exact component={EditFile} isPrivate />

      <Route path="/novaEmpresa/:id/editAtividade/:atividade_id" exact component={EditarAtividade} isPrivate />

      <Route path="/novaEmpresa/:id/editVideo/:video_id" exact component={EditarVideo} isPrivate />

{/* Empresa Painel */}

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
