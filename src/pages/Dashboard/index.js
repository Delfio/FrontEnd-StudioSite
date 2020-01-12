import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { routePrivate } from '../../store/modules/auth/actions'

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPrivate() {
      await dispatch(routePrivate(true))
    }
    loadPrivate();
  }, [])

  return (
    <div className="row">

      <div className="col s12 m4 l3">

      </div>

      <div className="col s12 m8 l9">

      </div>

    </div>
  )
}
