import React from "react";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import { Nav, Navbar, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers/index";
import { format } from "date-fns";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Cloud: React.FC = () => {
  const lastUpdatedAt = useSelector(({ stock }: AppState) => stock.updatedAt);

  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <NavLink
              activeClassName={"active"}
              className="mr-1 ml-1 link"
              exact={true}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName={"active"}
              className="mr-1 ml-1 link"
              exact={true}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </Nav>
          <Form inline>
            <p>
              Last update - {format(lastUpdatedAt, "kk:mm:ss - MM/dd/yyyy")}
            </p>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/favorites"} component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
};

export default Cloud;
