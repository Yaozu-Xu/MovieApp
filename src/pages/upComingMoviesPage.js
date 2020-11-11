import React from "react";
import useUpComingMovies from '../hooks/useUpComingMovies'
import AddToWatchListButton from '../components/buttons/addToWatchList'
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = props => {
  const { page } = props.match.params
  const [upComingMovies] = useUpComingMovies(page)
  return (
    upComingMovies &&
    <PageTemplate
      movies={upComingMovies}
      title={"Favorite Movies"}
      action={() => {
        return <AddToWatchListButton />;
      }}
    />
  );
};

export default FavoriteMoviesPage;