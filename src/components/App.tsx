import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Container } from "react-bootstrap";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <p>Init project</p>
      </Container>
    </Provider>
  );
};

export default App;
