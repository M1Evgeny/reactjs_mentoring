import { setMovieId } from "../actions/setMovieId";

export const setSortActionCreator = (movieId) => (dispatch) =>
  dispatch(setMovieId(movieId));
