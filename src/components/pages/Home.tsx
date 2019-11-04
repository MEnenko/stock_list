import React, { useState } from "react";
import Search from "../ui/Search";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  loadStock,
  loadFavoriteSymbolList,
  resetStock,
  markAsFavorite,
  removeTheMarkAsFavorite
} from "../../actions/stock";
import StockList from "../ui/StockList";
import { AppState } from "../../reducers/index";
import ErrorMessage from "../ui/ErrorMessage";

export const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const stocks = useSelector(({ stock }: AppState) => stock.list);
  const favoritesStocks = useSelector(
    ({ stock }: AppState) => stock.favoriteSymbolList
  );

  const handleChange = (text: string) => {
    if (!searchText) {
      dispatch(resetStock());
    }

    setSearchText(text);
  };

  const handleSubmit = () => {
    if (searchText) {
      dispatch(loadStock(searchText));
      dispatch(loadFavoriteSymbolList());
    }
  };

  const handleMarkAsFavoriteStock = (symbol: string) => {
    if (favoritesStocks.includes(symbol)) {
      return dispatch(removeTheMarkAsFavorite(symbol));
    }

    dispatch(markAsFavorite(symbol));
  };

  return (
    <div>
      <Row>
        <Col>
          <Search
            value={searchText}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <StockList
            stocks={stocks}
            favoritesStocks={favoritesStocks}
            onAddStockToFavorites={handleMarkAsFavoriteStock}
          />
        </Col>
      </Row>
      <ErrorMessage />
    </div>
  );
};

export default Home;
