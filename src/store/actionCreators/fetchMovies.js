import {
  fetchFilmsSuccess,
  fetchMoviesRequest,
  fetchMoviesFailure,
} from "../actions/fetchMoviesAction";

// actionCreator for async requests
export const fetchMoviesActionCreator = () => {
  return function (dispatch, getState) {
    dispatch(fetchMoviesRequest());
    fetch(getUrl(getState))
      .then((response) => response.json())
      .then((data) => dispatch(fetchFilmsSuccess(data.data)))
      .catch((error) => fetchMoviesFailure(error));
  };
};

const getUrl = (getState) => {
  const url = `http://localhost:4000/movies?sortBy=${
    getState().sortParam
  }&sortOrder=desc`;
  if (getState().genre !== "all") {
    return url.concat(`&filter=${getState().genre}`);
  }
  return url;
};
