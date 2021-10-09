import "./scss/App.scss";
import React, { useEffect } from "react";
import Modal from "react-modal";
import { ErrorPage, LoaderPage } from "./Pages";
import MainRouter from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import * as portfolio from "./redux/portfolio/actions";

Modal.setAppElement("#root");

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.portfolio);
  useEffect(() => {
    dispatch(portfolio.fetch());
  }, [dispatch]);

  if (state.loading) {
    return <LoaderPage />;
  }
  if (state.error) {
    return <ErrorPage error={state.error} status={state.error.status} />;
  }
  return <MainRouter data={state.data} initial={state.preprocessed} />;
};

export default App;
