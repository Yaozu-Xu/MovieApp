import React from 'react'
import FavoritesMoviesPage from '../../pages/favoritesMoviesPage'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const login = localStorage.getItem('login') === '1'
  if (login) {
    return <Route exact={props.exact} path={props.path} component={FavoritesMoviesPage} />
  } else {
    return <Redirect to="/login" />
  }
}

export default PrivateRoute
