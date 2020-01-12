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

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Noticias" component={Noticias} />
      <Route path="/Classificados" component={Classificados} />
      <Route path="/Eventos" component={Eventos} />
      <Route path="/Empresas" component={Empresas} />

      <Route path="/registrar" component={Registrar} />
      <Route path="/entrar" component={Entrar} painelControlle />
      <Route path="/painel" exact component={Dashboard} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
