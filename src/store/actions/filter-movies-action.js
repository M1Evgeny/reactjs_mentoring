import { constants } from "./constants";

export const movieGenre = (genre) => {
  return {
    type: constants.FILTER_MOVIES,
    payload: genre,
  };
};
