import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchList = ({movie}) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addWatch(movie.id);
  };
  return (
    <button
      type="button"
      onClick={handleAddToWatchList}
      className="btn w-100 btn-primary"
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchList;