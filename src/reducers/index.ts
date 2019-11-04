import { combineReducers } from "redux";
import stock from "./stock";
import error from "./error";

export const rootReducer = combineReducers({
  stock,
  error
});

export type AppState = ReturnType<typeof rootReducer>;
