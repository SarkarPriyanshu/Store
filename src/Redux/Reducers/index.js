import { combineReducers } from "redux";
import UserReducer from "./User/userReducer";

const Root_Reducer = combineReducers({ User_Reducer: UserReducer });

export default Root_Reducer;
