import { constants } from "./constants";

export const sort = (sortParam) => ({
  type: constants.SORT_MOVIES,
  payload: sortParam,
});
