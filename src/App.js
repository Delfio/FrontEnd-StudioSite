import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import Routes from './routes';
import history from './services/history';

import 'materialize-css/dist/css/materialize.min.css';
import GlobalStyle from './styles/global';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  // const isPrivate = useSelector(state => state.auth.isPrivate);

  useEffect(() =>{
    document.addEventListener('DOMContentLoaded', async function() {
      const elems = await document.querySelectorAll('.sidenav');
      await M.Sidenav.init(elems, {
        edge: "left",
        inDuration: 250
      });
    });
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          {/* <Header /> */}
          <Routes />
          <ToastContainer autoClose={3000}/>
          <GlobalStyle />
          {/* <Footer /> */}
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
