import { sort } from "../actions/sort-movies-action";

export const setSortActionCreator = (sortParam) => (dispatch) =>
  dispatch(sort(sortParam));
