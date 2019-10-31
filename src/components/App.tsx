import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Container } from "react-bootstrap";
import Cloud from "./common";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <Cloud />
      </Container>
    </Provider>
  );
};

export default App;
