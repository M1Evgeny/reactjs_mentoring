import { constants } from "../constants";
import { fetchMovieSuccess } from "../fetchMovieByIdAction";
import { setMovieId } from "../setMovieIdAction";
import {
  fetchFilmsSuccess,
  fetchMoviesRequest,
  fetchMoviesFailure,
} from "../fetchMoviesAction";

describe(">>>A C T I O N --- Test fetchMovieByIdAction", () => {
  it("+++ actionCreator fetchMovieSuccess", () => {
    const action = fetchMovieSuccess(50);

    expect(action).toEqual({
      type: constants.FETCH_MOVIE_BY_ID_REQUEST,
      payload: 50,
    });
  });
});

describe(">>>A C T I O N --- Test fetchMoviesAction", () => {
  it("+++ actionCreator fetchFilmsSuccess", () => {
    const action = fetchFilmsSuccess(50);

    expect(action).toEqual({
      type: constants.FETCH_MOVIES_SUCCESS,
      payload: 50,
    });
  });

  it("+++ actionCreator fetchMoviesRequest", () => {
    const action = fetchMoviesRequest();

    expect(action).toEqual({
      type: constants.FETCH_MOVIES_REQUEST,
    });
  });

  it("+++ actionCreator fetchMoviesFailure", () => {
    const error = new Error("test");
    const action = fetchMoviesFailure(error);

    expect(action).toEqual({
      type: constants.FETCH_MOVIES_FAILURE,
      payload: "test",
    });
  });
});

describe(">>>A C T I O N --- Test setMovieIdAction", () => {
  it("+++ actionCreator setMovieId", () => {
    const action = setMovieId(50);

    expect(action).toEqual({
      type: constants.SET_MOVIE_ID,
      payload: 50,
    });
  });
});
