import { useEffect, useState } from "react";
import { getUpComingMovies } from '../api/tmdb-api'

const useUpComingMovies = page => {
  const [upComingMovies, setUpComingMovies] = useState(null);
  useEffect(() => {
    getUpComingMovies(page).then(movies => {
      setUpComingMovies(movies);
    });
  }, [page]);
  return [upComingMovies, setUpComingMovies];
};

export default useUpComingMovies