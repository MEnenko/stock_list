import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FavoriteStockList from ".";
Enzyme.configure({ adapter: new Adapter() });

it("should run without failure with empty params", () => {
  const favoriteStockList = Enzyme.shallow(
    <FavoriteStockList
      favoritesStocks={[]}
      onRemoveStockFromFavorite={() => {}}
    />
  );

  expect(favoriteStockList.find("tbody").children()).toHaveLength(1);
});

it("should put stock param", () => {
  const favoritesStocks = [
    {
      symbol: "AAPL",
      companyName: "Apple",
      latestPrice: 200
    },
    {
      symbol: "AL",
      companyName: "Aleft",
      latestPrice: 200
    }
  ];

  const favoriteStockList = Enzyme.shallow(
    <FavoriteStockList
      favoritesStocks={favoritesStocks}
      onRemoveStockFromFavorite={() => {}}
    />
  );

  expect(favoriteStockList.find("tbody").children()).toHaveLength(2);
});
