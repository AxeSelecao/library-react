import { createStore, combineReducers, applyMiddleware } from "redux";
import { booksReducer } from "../reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
