import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import UpComingMoviesPage from './pages/upComingMoviesPage'
import MoviesContextProvider from "./contexts/moviesContext";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import GenresContextProvider from "./contexts/genresContext";
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import MoviePage from './pages/movieDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader />
      <div className="container-fluid">
        <MoviesContextProvider>
        <GenresContextProvider> 
        <Switch>
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming/:page" component={UpComingMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider> 
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));