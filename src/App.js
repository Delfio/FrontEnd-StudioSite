import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Route } from 'react-router-dom';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';
import history from './services/history';

import 'materialize-css/dist/css/materialize.min.css';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
