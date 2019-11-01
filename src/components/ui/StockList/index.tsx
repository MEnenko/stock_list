import React from "react";
import { IStock } from "types";
import StockItem from "../StockItem";
import { Table } from "react-bootstrap";

export interface IProps {
  stocks: IStock[];
  onAddStockToFavorites: (symbol: string) => void;
  favoritesStocks: string[];
}

const StockList: React.FC<IProps> = ({
  stocks,
  favoritesStocks,
  onAddStockToFavorites
}) => (
  <Table bordered>
    <tbody>
      {stocks.map(stock => {
        const isFavoriteStock = favoritesStocks.includes(stock.symbol);

        return (
          <StockItem
            key={stock.symbol}
            stock={stock}
            isFavorites={isFavoriteStock}
            onClick={onAddStockToFavorites}
          />
        );
      })}
    </tbody>
  </Table>
);

export default StockList;
