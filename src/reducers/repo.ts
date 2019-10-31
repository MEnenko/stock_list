import { Action, Reducer } from "redux";
import { IexCloud } from "types";

export interface IexCloudState {
  readonly list: IexCloud[];
}

const initialState: IexCloudState = {
  list: []
};

const reducer: Reducer<IexCloudState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
