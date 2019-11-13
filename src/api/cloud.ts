import { IStock, IFavoritesStocks } from "types";

const URL_GET_LIST =
  "https://cloud.iexapis.com/stable/stock/{symbol}/quote?filter={filter}&token={token}";
const URL_GET_FAVORITE_LIST =
  "https://cloud.iexapis.com/stable/stock/market/batch?symbols={symbols}&types=quote&filter={filter}&token={token}";

export const processPlaceholder = (url: any, data: object) => {
  return Object.entries(data).reduce((prevValue, [key, value]) => {
    const reg = new RegExp(`{${key}}`);
    return prevValue.replace(reg, value);
  }, url);
};

export const getStockBySearch = async (symbol: string): Promise<IStock[]> => {
  const url = processPlaceholder(
    process.env.REACT_APP_URL_GET_LIST || URL_GET_LIST,
    {
      symbol: symbol,
      filter: "symbol,companyName",
      token: process.env.REACT_APP_TOKEN
    }
  );

  const res = await fetch(url);

  return await res.json();
};

export const getFavoritesStockBySymbols = async (
  symbolsList: string[]
): Promise<IFavoritesStocks[]> => {
  const symbols = symbolsList.join(",");
  const filter = ["symbol", "companyName", "latestPrice"].join(",");

  const url = processPlaceholder(
    process.env.REACT_APP_URL_GET_FAVORITE_LIST || URL_GET_FAVORITE_LIST,
    {
      symbols,
      filter,
      token: process.env.REACT_APP_TOKEN
    }
  );

  const res = await fetch(url);

  const favoriteStockList = Object.entries(await res.json()).map(
    ([key, value]: any) => value.quote
  );

  return favoriteStockList;
};
