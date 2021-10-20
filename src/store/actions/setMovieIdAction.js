import { constants } from "./constants";

export const setMovieId = (data) => ({
  type: constants.SET_MOVIE_ID,
  payload: data,
});
