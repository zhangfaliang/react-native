import { createStore, combineReducers, compose } from "redux";
import { test, test1 } from "../reducers/index";
import Reactotron from "../reactotronConfig";
const reducers = combineReducers({ test, test1 });
const store = createStore(reducers, compose(Reactotron.createEnhancer()));
export default store;
