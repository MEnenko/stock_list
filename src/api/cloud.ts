import { IStock, IFavoritesStocks } from "types";

export const getStockBySearch = async (symbol: string): Promise<IStock[]> => {
  const res = await fetch(
    `${process.env.REACT_APP_URL}/${symbol}/quote?filter=symbol,companyName&token=${process.env.REACT_APP_TOKEN}`
  );

  return await res.json();
};

export const getFavoritesStockBySymbols = async (
  symbolsList: string[]
): Promise<IFavoritesStocks[]> => {
  const symbols = symbolsList.join(",");
  const filter = ["symbol", "companyName", "latestPrice"].join(",");

  const res = await fetch(
    `${process.env.REACT_APP_URL}/market/batch?symbols=${symbols}&types=quote&filter=${filter}&token=${process.env.REACT_APP_TOKEN}`
  );

  const favoriteStockList = Object.entries(await res.json()).map(
    ([key, value]: any) => value.quote
  );

  return favoriteStockList;
};
