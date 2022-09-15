import { createStore, applyMiddleware, combineReducers } from "redux";
import createMiddleWareSaga from "redux-saga";
import rootSaga from "./saga/rootSaga";
import productReducers from "./reducers/productReducers";
const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
  productReducers,
});
const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);
export default store;
