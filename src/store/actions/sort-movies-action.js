import { constants } from "./constants";

export const sort = (sortParam) => {
  return {
    type: constants.SORT_MOVIES,
    payload: sortParam,
  };
};
