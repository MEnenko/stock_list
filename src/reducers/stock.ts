import {
  SET_STOCK,
  SET_FAVORITES_STOCKS_SYMBOL,
  SET_FAVORITE_STOCK_LIST,
  SET_LATEST_UPDATE_TIME,
  SET_LOAD_SUCCESSFUL,
  SET_LOAD_START
} from "../actions/types";
import { Reducer } from "redux";
import { IStock, IFavoritesStocks } from "types";
const KEY_FAVORITE = "favorite-list";

export interface IStockState {
  readonly list: IStock[];
  updatedAt: Date;
  favoriteSymbolList: string[];
  favoriteStockList: IFavoritesStocks[];
  loading: boolean;
}

const initialState: IStockState = {
  list: [],
  updatedAt: new Date(),
  favoriteSymbolList: JSON.parse(localStorage.getItem(KEY_FAVORITE) || "[]"),
  favoriteStockList: [],
  loading: false
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
        favoriteSymbolList: action.favoriteSymbolList
      };
    case SET_FAVORITE_STOCK_LIST:
      return {
        ...state,
        favoriteStockList: action.favoriteStockList,
        list: []
      };
    case SET_LATEST_UPDATE_TIME:
      return {
        ...state,
        updatedAt: new Date()
      };
    case SET_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case SET_LOAD_SUCCESSFUL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
