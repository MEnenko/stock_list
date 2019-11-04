import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers/index";
import { format } from "date-fns";

const Cloud: React.FC = () => {
  const lastUpdatedAt = useSelector(({ stock }: AppState) => stock.updatedAt);

  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link href="/#home">Watch list</Nav.Link>
            <Nav.Link eventKey="selected" href="/#favorites">
              Favorites
            </Nav.Link>
          </Nav>
          <p>Last update - {format(lastUpdatedAt, "kk:mm:ss - MM/dd/yyyy")}</p>
        </Navbar>

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
};

export default Cloud;
