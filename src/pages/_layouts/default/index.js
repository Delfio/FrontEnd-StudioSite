import React from 'react';
import PropType from 'prop-types'

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

DefaultLayout.prototype = {
  children: PropType.element.isRequired,
}
