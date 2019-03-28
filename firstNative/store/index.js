import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import mySaga from '../saga/index'
import { test, test1 } from "../reducers/index";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({ test, test1 });
const store = createStore(reducers,{}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// then run the saga
sagaMiddleware.run(mySaga)
// render the application
export default store;
