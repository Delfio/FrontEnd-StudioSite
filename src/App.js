import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import 'materialize-css/dist/css/materialize.min.css';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
