import React from "react";
import { Link } from "react-router-dom";
import ControleBar from "./components/controlebar";
import FilterBar from "./components/filterbar";
import QuotesViewer from "./components/quotes-viewer";
import StatusBar from "./components/statusbar";
import Styles from "./main-page.module.scss";

const MainPage = (props) => {
  return (
    <div>
      <FilterBar />
      <StatusBar />
      <ControleBar />
      <QuotesViewer />
    </div>
  );
};

export default MainPage;
