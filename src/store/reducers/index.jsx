import { constants } from "../actions/constants";

const initialState = {
  error: "",
  films: [],
  loading: false,
  sortParam: "release_date",
  genre: "all",
  movieId: "",
  movie: {},
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
        error: "",
      };
    case constants.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.SORT_MOVIES:
      return {
        ...state,
        sortParam: action.payload,
      };
    case constants.FILTER_MOVIES:
      return {
        ...state,
        genre: action.payload,
      };
    case constants.FETCH_MOVIE_BY_ID_REQUEST:
      return {
        ...state,
        movie: action.payload,
      };
    case constants.SET_MOVIE_ID:
      return {
        ...state,
        movieId: action.payload,
      };
    default:
      return state;
  }
};
