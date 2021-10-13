import { sort } from "../actions/sort-movies-action";

export const setSortActionCreator = (sortParam) => {
  return function (dispatch) {
    dispatch(sort(sortParam));
  };
};
