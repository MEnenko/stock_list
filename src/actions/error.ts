import { SET_ERROR } from "./types";

export const setError = (message: string) => ({
  type: SET_ERROR,
  message
});
