import React from 'react';
import PropType from 'prop-types'

import Menu from '../../../components/MenuPainel'

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Menu/>
      {children}
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropType.element.isRequired,
}
