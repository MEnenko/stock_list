import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StockItem from "../StockItem";
Enzyme.configure({ adapter: new Adapter() });

it("should run without failure with params", () => {
  const stock = {
    symbol: "AAPL",
    companyName: "Apple"
  };
  const isFavorites = true;

  const stockItem = Enzyme.shallow(
    <StockItem stock={stock} isFavorites={isFavorites} onClick={() => {}} />
  );

  expect(stockItem.find("tr").children()).toHaveLength(2);
});
