import { IStock, IFavoritesStocks } from "types";

export const processPlaceholder = (url: any, data: object) => {
  debugger;
  return Object.entries(data).reduce((prevValue, [key, value]) => {
    const reg = new RegExp(`{${key}}`);
    return prevValue.replace(reg, value);
  }, url);
};

export const getStockBySearch = async (symbol: string): Promise<IStock[]> => {
  const url = processPlaceholder(process.env.REACT_APP_URL_GET_LIST, {
    symbol: symbol,
    filter: "symbol,companyName",
    token: process.env.REACT_APP_TOKEN
  });

  const res = await fetch(url);

  return await res.json();
};

export const getFavoritesStockBySymbols = async (
  symbolsList: string[]
): Promise<IFavoritesStocks[]> => {
  const symbols = symbolsList.join(",");
  const filter = ["symbol", "companyName", "latestPrice"].join(",");

  const url = processPlaceholder(process.env.REACT_APP_URL_GET_FAVORITE_LIST, {
    symbols,
    filter,
    token: process.env.REACT_APP_TOKEN
  });

  const res = await fetch(url);

  const favoriteStockList = Object.entries(await res.json()).map(
    ([key, value]: any) => value.quote
  );

  return favoriteStockList;
};
