import React, { Suspense } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/Home";
import { Nav } from "react-bootstrap";

const Cloud: React.FC = () => (
  <Router>
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="selected" href="/#selected">
            Selected
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/selected" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default Cloud;
