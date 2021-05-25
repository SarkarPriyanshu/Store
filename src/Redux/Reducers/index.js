import { combineReducers } from "redux";
import UserReducer from "./User/userReducer";
import { CartReducer } from "./Cart/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const Root_Reducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
});

export default persistReducer(persistConfig, Root_Reducer);
