import React, { useEffect } from 'react';
import PropType from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

// import { useDispatch } from 'react-redux';
// import { routePrivate } from '../../../store/modules/auth/actions'

import Menu from '../../../components/MenuPainel';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', async function() {
      const elems = await document.querySelectorAll('.sidenav');
      await M.Sidenav.init(elems, {
        edge: 'left',
        inDuration: 250,
      });
    });
  }, []);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function loadPrivate() {
  //     await dispatch(routePrivate(true))
  //   }
  //   loadPrivate();
  // }, [])

  return (
    <Wrapper className="container">
      <Menu />
      {children}
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropType.element.isRequired,
};
