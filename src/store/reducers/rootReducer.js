import { combineReducers } from "redux";

import reducer from "./reducers";

export default combineReducers({
  contacts: reducer,
});
