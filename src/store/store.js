import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { movieReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const configureStore = (prevState) => {
  const store = createStore(
    movieReducer,
    prevState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
};