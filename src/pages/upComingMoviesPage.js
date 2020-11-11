import React from "react";
import useUpComingMovies from '../hooks/useUpComingMovies'
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = props => {
  const toDo = () => true;
  const { page } = props.match.params
  const [upComingMovies] = useUpComingMovies(page)
  return (
    upComingMovies &&
    <PageTemplate
      movies={upComingMovies}
      title={"Favorite Movies"}
      action={toDo}
    />
  );
};

export default FavoriteMoviesPage;