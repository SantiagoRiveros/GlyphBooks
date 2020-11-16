import { combineReducers } from "redux";
import user from "./user.reducer";
import cart from "./cart.reducer";
import search from "./search.reducer";

const rootReducer = combineReducers({ user, cart, search });

export default rootReducer;
