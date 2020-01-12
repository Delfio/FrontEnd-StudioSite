import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { routePrivate } from '../../store/modules/auth/actions'

import Menu from './MenuLateral';
export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPrivate() {
      await dispatch(routePrivate(true))
    }
    loadPrivate();
  }, [])

  return (
    <div class="row">

      <div class="col s12 m4 l3">
        <Menu />
      </div>

      <div class="col s12 m8 l9">

      </div>

    </div>
  )
}
