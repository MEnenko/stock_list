import React from "react";
import { IFavoritesStocks } from "types";
import { Button } from "react-bootstrap";

export interface IProps {
  stock: IFavoritesStocks;
  onClick: (symbol: string) => void;
}

const FavoriteStockItem: React.FC<IProps> = ({ stock, onClick }) => (
  <React.Fragment>
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.companyName}</td>
      <td>{stock.latestPrice}</td>
      <td align="center">
        <Button
          variant="light"
          block
          onClick={onClick.bind(null, stock.symbol)}
        >
          Remove from favorites
        </Button>
      </td>
    </tr>
  </React.Fragment>
);

export default FavoriteStockItem;
