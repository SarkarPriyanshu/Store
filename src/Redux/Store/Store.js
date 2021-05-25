import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import Root_Reducer from "../Reducers/index";

const middlewares = [logger];

export const store = createStore(Root_Reducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
