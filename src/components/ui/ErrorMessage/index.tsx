import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../reducers/index";
import styles from "./index.module.css";
import Toast from "react-bootstrap/Toast";
import { setError } from "../../../actions/error";

const ErrorMessage: React.FC = () => {
  const message = useSelector(({ error }: AppState) => error.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      setTimeout(() => dispatch(setError("")), 2000);
    }
  });

  if (!message) {
    return null;
  }

  return (
    <Toast
      show={true}
      transition={false}
      autohide
      role="alert"
      className={styles.message}
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ErrorMessage;
