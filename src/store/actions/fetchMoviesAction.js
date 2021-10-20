import { constants } from "./constants";

const fetchFilmsSuccess = (data) => ({
  type: constants.FETCH_MOVIES_SUCCESS,
  payload: data,
});

const fetchMoviesRequest = () => ({
  type: constants.FETCH_MOVIES_REQUEST,
});

const fetchMoviesFailure = (error) => ({
  type: constants.FETCH_MOVIES_FAILURE,
  payload: error.message,
});

export { fetchFilmsSuccess, fetchMoviesRequest, fetchMoviesFailure };
