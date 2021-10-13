import { movieGenre } from "../actions/filter-movies-action";

export const setFilterActionCreator = (genre) => {
  return function (dispatch) {
    dispatch(movieGenre(genre));
  };
};
