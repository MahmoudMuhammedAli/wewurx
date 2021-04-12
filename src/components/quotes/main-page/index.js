import React from "react";
import ControleBar from "./components/controlebar";
import FilterBar from "./components/filterbar";
import QuoteDirectory from "./components/quotes-directory";
import StatusBar from "./components/statusbar";

const MainPage = (props) => {
  return (
    <div>
      <FilterBar />
      <StatusBar />
      <ControleBar />
      <QuoteDirectory />
    </div>
  );
};

export default MainPage;
