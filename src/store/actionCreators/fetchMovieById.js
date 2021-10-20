import { fetchMovieSuccess } from "../actions/fetchMovieByIdAction";
import { constants } from "./constants";

export const fetchMovieByIdActionCreator = (movieId) => {
  return function (dispatch) {
    fetch(`${constants.BASE_URL}/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchMovieSuccess(data)));
  };
};
