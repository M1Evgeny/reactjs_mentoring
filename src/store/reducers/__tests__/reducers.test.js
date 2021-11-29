import { movieReducer } from "..";
import { constants } from "../../actions/constants";

describe(">>>R E D U C E R --- Test movieReducer", () => {
  it("+++ reducer with shapshot", () => {
    let state = {};
    expect(movieReducer(undefined, { type: "default" })).toMatchSnapshot();
  });

  it("+++ reducer for FETCH_MOVIES_REQUEST", () => {
    let state = { loading: false };
    state = movieReducer(state, { type: constants.FETCH_MOVIES_REQUEST });
    expect(state).toEqual({ loading: true });
  });

  it("+++ reducer for FETCH_MOVIES_SUCCESS", () => {
    const films = [1, 2, 3];
    let state = { films: [] };
    state = movieReducer(state, {
      type: constants.FETCH_MOVIES_SUCCESS,
      payload: films,
    });
    expect(state).toEqual({ films: films, error: "", loading: false });
  });

  it("+++ reducer for FETCH_MOVIES_FAILURE", () => {
    let state = {};
    state = movieReducer(state, {
      type: constants.FETCH_MOVIES_FAILURE,
      payload: "test",
    });
    expect(state).toEqual({ loading: false, error: "test" });
  });

  it("+++ reducer for SORT_MOVIES", () => {
    let state = {};
    state = movieReducer(state, {
      type: constants.SORT_MOVIES,
      payload: "test",
    });
    expect(state).toEqual({ sortParam: "test" });
  });

  it("+++ reducer for FILTER_MOVIES", () => {
    let state = {};
    state = movieReducer(state, {
      type: constants.FILTER_MOVIES,
      payload: "test",
    });
    expect(state).toEqual({ genre: "test" });
  });

  it("+++ reducer for FETCH_MOVIE_BY_ID_REQUEST", () => {
    let state = {};
    state = movieReducer(state, {
      type: constants.FETCH_MOVIE_BY_ID_REQUEST,
      payload: "test",
    });
    expect(state).toEqual({ movie: "test" });
  });

  it("+++ reducer for SET_MOVIE_ID", () => {
    let state = {};
    state = movieReducer(state, {
      type: constants.SET_MOVIE_ID,
      payload: "test",
    });
    expect(state).toEqual({ movieId: "test" });
  });
});
