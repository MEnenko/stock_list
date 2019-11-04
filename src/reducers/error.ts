import { SET_ERROR } from "../actions/types";
import { Action, Reducer } from 'redux';

export interface IErrorState {
  readonly message: string,
}

interface IGetRepoBranches extends Action<typeof SET_ERROR> {
  message: string,
}

const initialState: IErrorState = {
  message: '',
};

export const reducer: Reducer<IErrorState, IGetRepoBranches> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};

export default reducer;