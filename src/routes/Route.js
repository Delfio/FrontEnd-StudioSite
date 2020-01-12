import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import {store} from '../store';

import Dashboard from '../pages/Dashboard';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  painelControlle = false,
  ...rest
}){
  const [routePrivate, setRoutePrivate] = useState(false);
  const signed = store.getState().auth.signed;

  useEffect(() => {
    const routess = store.getState().auth.isPrivate;
    setRoutePrivate(routess);
  }, [])

  if(!signed && isPrivate){
    return <Redirect to="/entrar" />
  }

  if(painelControlle && !signed && !isPrivate) {
    return <Route component={Component} />
  }

  if(painelControlle && signed) {
    return <Route component={Dashboard} {...rest} />
  }

  const Layout = routePrivate ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
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
