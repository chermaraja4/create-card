import { combineReducers } from "redux";

import Reducer from "./Card/card.reducer";

const RootReducer = combineReducers({
  card: Reducer,
});
export default RootReducer;
