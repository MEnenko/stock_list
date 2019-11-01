import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { loadFavoritesStocks } from "../../actions/stock";
import FavoriteStockList from "../ui/FavoriteStockList";
import { AppState } from "../../reducers/index";

export const Favorites: React.FC = () => {
  const dispatch = useDispatch();

  const favoritesStocks = useSelector(
    ({ stock }: AppState) => stock.favoriteStockList
  );

  useEffect(() => {
    if (!favoritesStocks.length) {
      dispatch(loadFavoritesStocks());
    } else {
      setTimeout(() => dispatch(loadFavoritesStocks()), 900000);
    }
  });

  const handleRemoveStockFromFavorite = (symbol: string) => {};

  return (
    <div>
      <Row>
        <Col>
          <FavoriteStockList
            favoritesStocks={favoritesStocks}
            onRemoveStockFromFavorite={handleRemoveStockFromFavorite}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Favorites;
