import { constants } from "./constants";

const fetchFilmsSuccess = (data) => {
  return {
    type: constants.FETCH_MOVIES_SUCCESS,
    payload: data,
  };
};

const fetchMoviesRequest = () => {
  return {
    type: constants.FETCH_MOVIES_REQUEST,
  };
};

const fetchMoviesFailure = (error) => {
  return {
    type: constants.FETCH_MOVIES_FAILURE,
    payload: error.message,
  };
};

export { fetchFilmsSuccess, fetchMoviesRequest, fetchMoviesFailure };
