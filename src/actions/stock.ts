import {
  SET_STOCK,
  SET_FAVORITES_STOCKS_SYMBOL,
  SET_FAVORITE_STOCK_LIST,
  SET_LATEST_UPDATE_TIME
} from "./types";
import { IFavoritesStocks } from "../types";
import { setError } from "./error";
import { Dispatch } from "redux";
import { getStockBySearch, getFavoritesStockBySymbols } from "../api/cloud";

const KEY_FAVORITE = "favorite-list";

export const loadStock = (query: string) => async (dispatch: Dispatch) => {
  try {
    const list = await getStockBySearch(query);

    dispatch({
      type: SET_STOCK,
      list: [list]
    });
  } catch (err) {
    dispatch(setError(err.message));
    dispatch({
      type: SET_STOCK,
      list: []
    });
  }
};

export const loadFavoritesStocks = () => async (dispatch: Dispatch) => {
  try {
    const favoriteStockList = await getFavoritesStockBySymbols(
      getLocaleFavoriteSymbolList()
    );

    dispatch(setFavoriteStockList(favoriteStockList));
    dispatch(setLatestUpdateTime());
  } catch (err) {
    console.log(err.message);
  }

  let timerLoadFavoritesStock;

  clearInterval(timerLoadFavoritesStock);

  timerLoadFavoritesStock = setInterval(async () => {
    try {
      const favoriteStockList = await getFavoritesStockBySymbols(
        getLocaleFavoriteSymbolList()
      );
      dispatch(setFavoriteStockList(favoriteStockList));
      dispatch(setLatestUpdateTime());
    } catch (err) {
      console.log(err.message);
    }
  }, Number(process.env.REACT_APP_TIME_INTERVAL) * 60000);
};

export const setLatestUpdateTime = () => ({
  type: SET_LATEST_UPDATE_TIME
});

export const resetStock = () => (dispatch: Dispatch) => {
  dispatch({
    type: SET_STOCK,
    list: []
  });
};

export const markAsFavorite = (symbol: string) => async (
  dispatch: Dispatch
) => {
  let favoriteSymbolList = getLocaleFavoriteSymbolList();

  favoriteSymbolList.push(symbol);

  setLocaleFavoriteSymbolList(favoriteSymbolList);

  dispatch(setFavoritesStockSymbol(favoriteSymbolList));
};

export const setFavoriteStockList = (
  favoriteStockList: IFavoritesStocks[]
) => ({
  type: SET_FAVORITE_STOCK_LIST,
  favoriteStockList
});

export const setFavoritesStockSymbol = (favoriteSymbolList: string[]) => ({
  type: SET_FAVORITES_STOCKS_SYMBOL,
  favoriteSymbolList
});

export const getLocaleFavoriteSymbolList = (): string[] => {
  return JSON.parse(localStorage.getItem(KEY_FAVORITE) || "[]");
};

export const setLocaleFavoriteSymbolList = (favoriteSymbolList: string[]) => {
  localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteSymbolList));
};

export const removeTheMarkAsFavorite = (symbol: string) => (
  dispatch: Dispatch,
  getState: any
) => {
  let favoriteSymbolList = getLocaleFavoriteSymbolList();
  let favoriteStockList = getState().stock.favoriteStockList;

  favoriteSymbolList = favoriteSymbolList.filter(el => el !== symbol);
  favoriteStockList = favoriteStockList.filter(
    (el: any) => el.symbol !== symbol
  );

  setLocaleFavoriteSymbolList(favoriteSymbolList);
  dispatch(setFavoritesStockSymbol(favoriteSymbolList));
  dispatch(setFavoriteStockList(favoriteStockList));
};

export const loadFavoriteSymbolList = () => (dispatch: Dispatch) => {
  let favoriteSymbolList = getLocaleFavoriteSymbolList();

  dispatch(setFavoritesStockSymbol(favoriteSymbolList));
};
