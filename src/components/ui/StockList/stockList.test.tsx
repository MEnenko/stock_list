import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StockList from "../StockList";

Enzyme.configure({ adapter: new Adapter() });

it("should run without failure with empty params", () => {
  const stockList = Enzyme.shallow(
    <StockList
      stocks={[]}
      favoritesStocks={[]}
      onAddStockToFavorites={() => {}}
    />
  );

  expect(stockList.find("tbody").children()).toHaveLength(0);
});

it("should put repos param", () => {
  const stocks = [
    {
      symbol: "AAPL",
      companyName: "Apple"
    },
    {
      symbol: "AA",
      companyName: "Apngar"
    }
  ];

  const favorites = ["AAPL"];

  const stockList = Enzyme.shallow(
    <StockList
      stocks={stocks}
      favoritesStocks={favorites}
      onAddStockToFavorites={() => {}}
    />
  );

  expect(stockList.find("tbody").children()).toHaveLength(2);
});
