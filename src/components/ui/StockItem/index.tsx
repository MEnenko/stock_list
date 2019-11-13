import React from "react";
import { IStock } from "types";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import classNames from "classnames";

export interface IProps {
  stock: IStock;
  isFavorites: boolean;
  onClick: (symbol: string) => void;
}

const StockItem: React.FC<IProps> = ({ stock, isFavorites, onClick }) => (
  <tr>
    <td className="col-md-3">
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={
          <Tooltip id="bottom">
            There is such paper and this is {stock.companyName} stock
          </Tooltip>
        }
      >
        <Button variant="light" block>
          {stock.symbol}
        </Button>
      </OverlayTrigger>
    </td>
    <td align="right">
      <button
        className={classNames("btn btn-default text-secondary", [
          { "text-warning": isFavorites }
        ])}
        onClick={onClick.bind(null, stock.symbol)}
      >
        ★
      </button>
    </td>
  </tr>
);

export default StockItem;
