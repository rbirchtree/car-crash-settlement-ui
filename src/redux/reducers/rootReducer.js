import { combineReducers } from "redux";

import userReducer from "./userReducer.js";
import accidentsReducer from "./accidentsReducer.js";

export default combineReducers({
  userReducer,
  accidentsReducer,
});
