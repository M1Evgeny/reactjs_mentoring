import { movieGenre } from "../actions/filter-movies-action";

export const setFilterActionCreator = (genre) => (dispatch) =>
  dispatch(movieGenre(genre));
