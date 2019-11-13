import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FavoriteStockItem from ".";
Enzyme.configure({ adapter: new Adapter() });

it("should run without failure with params", () => {
  const stock = {
    symbol: "AAPL",
    companyName: "Apple",
    latestPrice: 200
  };
  const favoriteStockItem = Enzyme.shallow(
    <FavoriteStockItem stock={stock} onClick={() => {}} />
  );

  expect(favoriteStockItem.find("tr").children()).toHaveLength(4);
});

it("should call onClick collback on button click", () => {
  const stock = {
    symbol: "AAPL",
    companyName: "Apple",
    latestPrice: 200
  };

  const mockOnClick = jest.fn();
  const favoriteStockItem = Enzyme.shallow(
    <FavoriteStockItem stock={stock} onClick={mockOnClick} />
  );

  const input = favoriteStockItem.find("Button");
  input.simulate("click");

  expect(mockOnClick.mock.calls.length).toBe(1);
});
