import React, { useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  loadFavoritesStocks,
  removeTheMarkAsFavorite
} from "../../actions/stock";
import FavoriteStockList from "../ui/FavoriteStockList";
import { AppState } from "../../reducers/index";

export const Favorites: React.FC = () => {
  const dispatch = useDispatch();

  const favoritesStocks = useSelector(
    ({ stock }: AppState) => stock.favoriteStockList
  );
  const favoriteSymbolList = useSelector(
    ({ stock }: AppState) => stock.favoriteSymbolList
  );
  const loading = useSelector(({ stock }: AppState) => stock.loading);
  const lastUpdatedAt = useSelector(({ stock }: AppState) => stock.updatedAt);

  const isTimeHasPassed = (lastUpdatedAt: Date) => {
    return (
      new Date() >=
      new Date(
        lastUpdatedAt.setMinutes(
          new Date().getMinutes() + Number(process.env.REACT_APP_TIME_INTERVAL)
        )
      )
    );
  };

  useEffect(() => {
    if (!favoritesStocks.length && favoriteSymbolList.length) {
      dispatch(loadFavoritesStocks());
    } else if (favoriteSymbolList.length > favoritesStocks.length) {
      dispatch(loadFavoritesStocks());
    } else if (isTimeHasPassed(lastUpdatedAt)) {
      dispatch(loadFavoritesStocks());
    }
  });

  const handleRemoveStockFromFavorite = (symbol: string) => {
    dispatch(removeTheMarkAsFavorite(symbol));
  };

  return (
    <div>
      <Row>
        <Col>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <FavoriteStockList
              favoritesStocks={favoritesStocks}
              onRemoveStockFromFavorite={handleRemoveStockFromFavorite}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Favorites;
