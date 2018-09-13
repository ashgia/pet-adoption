import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";
// import shelterReducer from "./ducks/shelterReducer";

// Combine reducers into one
const combinedReducers = combineReducers({
  user: userReducer
  // shelter: shelterReducer
});

// devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middlewares
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

// store with reducers and middlewares
const store = createStore(combinedReducers, middlewares);

export default store;
