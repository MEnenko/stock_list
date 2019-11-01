import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import { Nav, Navbar } from "react-bootstrap";

const Cloud: React.FC = () => (
  <Router>
    <div>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="/#home">Watch list</Nav.Link>
          <Nav.Link eventKey="selected" href="/#favorites">
            Favorites
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  </Router>
);

export default Cloud;
