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

import AllEmpresas from '../pages/Dashboard/Empresas/TodasAsEmpresas';

import EditarEmpresas from '../pages/Dashboard/Empresas/EditarEmpresa';
/* Empresas */


/* Empresa Destaque */

import PostEmpresaDestaque from '../pages/Dashboard/EmpresaDestaque';

import FileEmpresaDestaque from '../pages/Dashboard/EmpresaDestaque/Files';

import EditarImagemEmpresaDestaque from '../pages/Dashboard/EmpresaDestaque/EditarImage';
import EditarVideoEmpresaDestaque from '../pages/Dashboard/EmpresaDestaque/EditarVideo';
import EditarEmpresaEmDestaque from '../pages/Dashboard/EmpresaDestaque/EditarEmpresaDestaque';

import AllEmpresasDestaque from '../pages/Dashboard/EmpresaDestaque/AllEmpresasDestaque';


/* Empresa Destaque */


/* Noticias */
import PostNoticia from '../pages/Dashboard/Noticias';
import FileNoticia from '../pages/Dashboard/Noticias/Files';

import EditarNoticia from '../pages/Dashboard/Noticias/EditarNoticia';

import EditarImagemNoticia from '../pages/Dashboard/Noticias/EditarImage';
import AllNews from '../pages/Dashboard/Noticias/TodasAsNoticias';

import NoticiasListadas from '../pages/Dashboard/Noticias/NoticiasListadas';
/* Noticias */

/* Eventos */
import PostEventos from '../pages/Dashboard/Eventos';
import FileEvento from '../pages/Dashboard/Eventos/Files';

import EditarImagemEvento from '../pages/Dashboard/Eventos/EditarImagem';
import EditarVideoEvento from '../pages/Dashboard/Eventos/EditarVideo';
import EditarEvento from '../pages/Dashboard/Eventos/EditarEvento';

import TodosOsEventos from '../pages/Dashboard/Eventos/AllEventos';

/* Eventos */


/* Conteudo Principal */

import PostConteudoPrincipal from '../pages/Dashboard/ConteudoPrincipal';
import FilesConteudoPrincipal from '../pages/Dashboard/ConteudoPrincipal/Files';

import EditarImagemConteudoPrincipal from '../pages/Dashboard/ConteudoPrincipal/EditarImagem';
import AllConteudoPrincipal from '../pages/Dashboard/ConteudoPrincipal/AllConteudo';

import EditarConteudoPrincipal from '../pages/Dashboard/ConteudoPrincipal/EditarConteudoPrincipal';

/* Conteudo Principal */

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

      <Route path="/allEmpresa" exact component={AllEmpresas} isPrivate />

      <Route path="/editarEmpresa/:id" exact component={EditarEmpresas} isPrivate />

{/* Empresa Painel */}


{/* Empresa Destaque */}
      <Route path="/novaEmpresaDestaque" exact component={PostEmpresaDestaque} isPrivate />
      <Route path="/novaEmpresaDestaque/:id/files" exact component={FileEmpresaDestaque} isPrivate />

      <Route path="/novaEmpresaDestaque/:id/editarImagem/EmpresaDestaque/:imagem_id" exact component={EditarImagemEmpresaDestaque} isPrivate />
      <Route path="/novaEmpresaDestaque/:id/editVideo/:video_id" exact component={EditarVideoEmpresaDestaque} isPrivate />

      <Route path="/allEmpresaDestaque" exact component={AllEmpresasDestaque} isPrivate />

      <Route path="/editarEmpresaDestaque/:id" exact component={EditarEmpresaEmDestaque} isPrivate />

{/* Empresa Destaque */}


{/* Noticia Painel */}
      <Route path="/novaNews" exact component={PostNoticia} isPrivate />
      <Route path="/novaNews/:id/files" exact component={FileNoticia} isPrivate />
      <Route path="/novaNews/:id/editarImagem/News/:imagem_id" exact component={EditarImagemNoticia} isPrivate />
      <Route path="/allNews" exact component={AllNews} isPrivate />
      <Route path="/newsList" exact component={NoticiasListadas} isPrivate />
      <Route path="/editarNews/:id" exact component={EditarNoticia} isPrivate />

{/* Noticia Painel */}

{/* Eventos */}
      <Route path="/novoEvento" exact component={PostEventos} isPrivate />

      <Route path="/novoEvento/:id/files" exact component={FileEvento} isPrivate />
      <Route path="/novoEvento/:id/editarImagem/Evento/:imagem_id" exact component={EditarImagemEvento} isPrivate />

      <Route path="/novoEvento/:id/editVideo/:video_id" exact component={EditarVideoEvento} isPrivate />

      <Route path="/editarEvento/:id" exact component={EditarEvento} isPrivate />

      <Route path="/allEventos" exact component={TodosOsEventos} isPrivate />

{/* Eventos */}


{/* Conteudo principal */}
      <Route path="/conteudoPrincipal" exact component={PostConteudoPrincipal} isPrivate />
      <Route path="/newPrincipal/:id/files" exact component={FilesConteudoPrincipal} isPrivate />
      <Route path="/newPrincipal/:id/editarImagem/Evento/:imagem_id" exact component={EditarImagemConteudoPrincipal} isPrivate />

      <Route path="/allConteudoPrincipal" exact component={AllConteudoPrincipal} isPrivate />
      <Route path="/editarConteudoPrincipal/:id" exact component={EditarConteudoPrincipal} isPrivate />

{/* Conteudo principal */}

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
