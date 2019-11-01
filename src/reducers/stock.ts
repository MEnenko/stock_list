import {
  SET_STOCK,
  SET_FAVORITES_STOCKS_SYMBOL,
  SET_FAVORITE_STOCK_LIST
} from "../actions/types";
import { Reducer } from "redux";
import { IStock, IFavoritesStocks } from "types";

export interface IStockState {
  readonly list: IStock[];
  favoriteSymbolList: string[];
  favoriteStockList: IFavoritesStocks[];
}

const initialState: IStockState = {
  list: [],
  favoriteSymbolList: [],
  favoriteStockList: []
};

const reducer: Reducer<IStockState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCK:
      return {
        ...state,
        list: action.list
      };
    case SET_FAVORITES_STOCKS_SYMBOL:
      return {
        ...state,
        favoriteSymbolList: action.favoriteSymbolList,
        favoriteStockList: []
      };
    case SET_FAVORITE_STOCK_LIST:
      return {
        ...state,
        favoriteStockList: action.favoriteStockList,
        list: []
      };
    default:
      return state;
  }
};

export default reducer;
