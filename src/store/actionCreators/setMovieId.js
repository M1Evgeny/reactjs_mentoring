import { setMovieId } from "../actions/setMovieId";

export const setSortActionCreator = (movieId) => {
  return function (dispatch) {
    dispatch(setMovieId(movieId));
  };
};
