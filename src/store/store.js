import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { movieReducer } from "./reducers";

export const store = createStore(
  movieReducer,
  applyMiddleware(thunkMiddleware)
);
