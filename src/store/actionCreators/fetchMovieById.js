import { fetchMovieSuccess } from "../actions/fetchMovieByIdAction";
import { constants } from "./constants";
import fetch from "isomorphic-fetch";

export const fetchMovieByIdActionCreator = (movieId) => {
  return function (dispatch) {
    return fetch(`${constants.BASE_URL}/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchMovieSuccess(data)));
  };
};
