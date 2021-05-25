import { combineReducers } from "redux";
import UserReducer from "./User/userReducer";
import { CartReducer } from "./Cart/cartReducer";

const Root_Reducer = combineReducers({
  User_Reducer: UserReducer,
  cart: CartReducer,
});

export default Root_Reducer;
