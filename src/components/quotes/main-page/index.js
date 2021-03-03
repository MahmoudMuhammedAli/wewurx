import React from "react";
import { Link } from "react-router-dom";
import ControleBar from "./components/controlebar";
import FilterBar from "./components/filterbar";
import StatusBar from "./components/statusbar";
import Styles from "./main-page.module.scss";

const MainPage = (props) => {
  return (
    <div>
      <FilterBar />
      <StatusBar />
      <ControleBar />
    </div>
  );
};

export default MainPage;
