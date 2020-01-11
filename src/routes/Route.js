import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import {store} from '../store';

import Dashboard from '../pages/Dashboard';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  painelControlle = false,
  ...rest
}){
  const signed = store.getState().auth.signed;

  if(!signed && isPrivate){
    return <Redirect to="/entrar" />
  }

  if(painelControlle && !signed && !isPrivate) {
    return <Route component={Component} />
  }

  if(painelControlle && signed) {
    return <Route component={Dashboard} {...rest} />
  }

  return (
    <Route
      {...rest}
      component={Component}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
