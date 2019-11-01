import React from "react";
import { IFavoritesStocks } from "types";
import FavoriteStockItem from "../FavoriteStockItem";
import { Table } from "react-bootstrap";

export interface IProps {
  favoritesStocks: IFavoritesStocks[];
  onRemoveStockFromFavorite: (symbol: string) => void;
}

const FavoriteStockList: React.FC<IProps> = ({
  favoritesStocks,
  onRemoveStockFromFavorite
}) => (
  <Table bordered>
    <tbody>
      {favoritesStocks.map(stock => (
        <FavoriteStockItem
          key={stock.symbol}
          stock={stock}
          onClick={onRemoveStockFromFavorite}
        />
      ))}
    </tbody>
  </Table>
);

export default FavoriteStockList;
