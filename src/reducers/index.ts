import { combineReducers } from "redux";
import stock from "./stock";

export const rootReducer = combineReducers({
  stock
});

export type AppState = ReturnType<typeof rootReducer>;
