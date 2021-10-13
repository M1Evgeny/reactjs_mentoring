import { fetchMovieSuccess } from "../actions/fetchMovieByIdAction";

export const fetchMovieByIdActionCreator = (movieId) => {
  return function (dispatch) {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchMovieSuccess(data)));
  };
};
