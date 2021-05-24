import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Root_Reducer from "../Reducers/index";

const middlewares = [logger];

const store = createStore(Root_Reducer, applyMiddleware(...middlewares));

export default store;
