import { constants } from "./constants";

export const setMovieId = (data) => {
  return {
    type: constants.SET_MOVIE_ID,
    payload: data,
  };
};
