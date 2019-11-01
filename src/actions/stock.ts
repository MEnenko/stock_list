import {
  SET_STOCK,
  SET_FAVORITES_STOCKS_SYMBOL,
  SET_FAVORITE_STOCK_LIST
} from "./types";
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
    console.log(err.message);
  }
};

export const loadFavoritesStocks = () => async (dispatch: Dispatch) => {
  try {
    const favoriteStockList = await getFavoritesStockBySymbols(
      getLocaleFavoriteSymbolList()
    );

    dispatch({
      type: SET_FAVORITE_STOCK_LIST,
      favoriteStockList
    });
  } catch (err) {
    console.log(err.message);
  }
};

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
  dispatch: Dispatch
) => {
  let favoriteSymbolList = getLocaleFavoriteSymbolList();

  favoriteSymbolList = favoriteSymbolList.filter(el => el !== symbol);

  setLocaleFavoriteSymbolList(favoriteSymbolList);

  dispatch(setFavoritesStockSymbol(favoriteSymbolList));
};

export const loadFavoriteSymbolList = () => (dispatch: Dispatch) => {
  let favoriteSymbolList = getLocaleFavoriteSymbolList();

  dispatch(setFavoritesStockSymbol(favoriteSymbolList));
};
