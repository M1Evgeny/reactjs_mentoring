import { constants } from "./constants";

export const fetchMovieSuccess = (data) => {
  return {
    type: constants.FETCH_MOVIE_BY_ID_REQUEST,
    payload: data,
  };
};
