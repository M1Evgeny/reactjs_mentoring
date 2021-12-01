import {
  fetchFilmsSuccess,
  fetchMoviesRequest,
  fetchMoviesFailure,
} from "../actions/fetchMoviesAction";
import { constants } from "./constants";
import fetch from "isomorphic-fetch";

// actionCreator for async requests
export const fetchMoviesActionCreator = (genre, sortBy, searchText) => {
  const mGenre = genre ? genre : "all";
  const mSortBy = sortBy ? sortBy : "release_date";
  const mSearchText = searchText ? searchText : "";
  return function (dispatch) {
    dispatch(fetchMoviesRequest());
    return fetch(getUrl(mGenre, mSortBy, mSearchText))
      .then((response) => response.json())
      .then((data) => dispatch(fetchFilmsSuccess(data.data)))
      .catch((error) => fetchMoviesFailure(error));
  };
};

const getUrl = (genre, sortBy, searchText) => {
  const url = `${constants.BASE_URL}/movies?sortBy=${
    sortBy ? sortBy : "release_date"
  }&sortOrder=desc&search=${searchText}&searchBy=title`;
  if (genre !== "all") {
    return url.concat(`&filter=${genre}`);
  }
  return url;
};
