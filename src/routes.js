import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Main';
import Noticias from './pages/Noticias';
import Classificados from './pages/Classificados';
import Eventos from './pages/Eventos';
import Empresas from './pages/Empresas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Noticias" component={Noticias} />
      <Route path="/Classificados" component={Classificados} />
      <Route path="/Eventos" component={Eventos} />
      <Route path="/Empresas" component={Empresas} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
