import { constants } from "./constants";

export const movieGenre = (genre) => ({
  type: constants.FILTER_MOVIES,
  payload: genre,
});
