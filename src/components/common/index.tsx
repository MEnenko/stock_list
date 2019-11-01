import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import { Nav } from "react-bootstrap";

const Cloud: React.FC = () => (
  <Router>
    <div>
      <Nav variant="tabs" defaultActiveKey="/#home">
        <Nav.Item>
          <Nav.Link href="/#home">Watch list</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="selected" href="/#favorites">
            Favorites
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  </Router>
);

export default Cloud;
