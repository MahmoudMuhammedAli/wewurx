import React from "react";
import Styles from "./main-page.module.scss";
import FilterBar from "./components/filterbar";
import StatusBar from "./components/statusfilterbar";
import ControleBar from "./components/controlebar";
import Header from "./components/invoice-item-header";
import Item from "./components/item";

const MainPage = (props) => {
  return (
    <div className={Styles.mainpage}>
      <FilterBar />
      <StatusBar />
      <ControleBar />
      <Header />
      <Item />
      <Item />
    </div>
  );
};

export default MainPage;
