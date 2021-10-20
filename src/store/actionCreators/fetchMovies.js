import {
  fetchFilmsSuccess,
  fetchMoviesRequest,
  fetchMoviesFailure,
} from "../actions/fetchMoviesAction";
import { constants } from "./constants";

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
  const url = `${constants.BASE_URL}/movies?sortBy=${
    getState().sortParam
  }&sortOrder=desc`;
  if (getState().genre !== "all") {
    return url.concat(`&filter=${getState().genre}`);
  }
  return url;
};
