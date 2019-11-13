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
      {favoritesStocks.length ? (
        favoritesStocks.map(stock => (
          <FavoriteStockItem
            key={stock.symbol}
            stock={stock}
            onClick={onRemoveStockFromFavorite}
          />
        ))
      ) : (
        <tr>
          <td align="center">No favorite stocks</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default FavoriteStockList;
