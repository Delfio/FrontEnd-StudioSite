import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import api from '../../../services/api';


import { Container } from './styles';

export default function Classificados() {
  return (
    <div className="container">
      <Container className="col s12" >
        <h1 className="header red-text"> Confira seus Classificados </h1>
        <hr/>
      </Container>
    </div>
  );
}
