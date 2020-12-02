import React, { lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './store'
import { createStore } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom' // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage' // NEW
import UpComingMoviesPage from './pages/upComingMoviesPage'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MoviesContextProvider from './contexts/moviesContext'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './globals/global.scss'
import HomePage from './pages/homePage'
import GenresContextProvider from './contexts/genresContext'
import SiteHeader from './components/siteHeader'
import MoviePage from './pages/movieDetailsPage'
import LoginPage from './pages/loginPage'
import Auth from './components/common/Auth'
import StarPage from './pages/starPage'
import firebase, { FirebaseContext } from './components/firebase'

const MovieReviewPage = lazy(() => import('./pages/movieReviewPage'))
const SignupPage = lazy(() => import('./pages/signupPage'))
const StarDetailPage = lazy(() => import('./pages/startDetailPage'))
const store = createStore(reducers)

const App = () => {
  const PrivatRoute = () => {
    return (
      <Route
        exact
        path="/movies/favorites"
        render={(props) =>
          firebase.checkLogin() ? (
            <FavoriteMoviesPage />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          )
        }
      />
    )
  }

  return (
    <Provider store={store}>
      <FirebaseContext.Provider value={firebase}>
        <BrowserRouter>
          <div className="jumbotron">
            <SiteHeader />
            <div className="container-fluid">
              <MoviesContextProvider>
                <GenresContextProvider>
                  <Auth />
                  <Switch>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />{' '}
                    <Route exact path="/login" component={LoginPage} />{' '}
                    <Route exact path="/signup" component={SignupPage} />{' '}
                    <Route path="/reviews/:id" component={MovieReviewPage} /> 
                    {PrivatRoute()}
                    <Route exact path="/movies/upcoming/:page" component={UpComingMoviesPage} />{' '}
                    <Route path="/movies/:id" component={MoviePage} />{' '}
                    <Route path="/stars/:page" component={StarPage} />{' '}
                    <Route path="/people/:id" component={StarDetailPage} /> <Route path="/" component={HomePage} />{' '}
                    <Redirect from="*" to="/" />
                  </Switch>{' '}
                </GenresContextProvider>{' '}
              </MoviesContextProvider>{' '}
            </div>{' '}
          </div>{' '}
        </BrowserRouter>{' '}
      </FirebaseContext.Provider>{' '}
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
