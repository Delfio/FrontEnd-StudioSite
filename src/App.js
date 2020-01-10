import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';

import 'materialize-css/dist/css/materialize.min.css';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
