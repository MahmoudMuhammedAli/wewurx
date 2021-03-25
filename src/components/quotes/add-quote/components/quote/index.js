import React from "react";
import Styles from "./quote.module.scss";
import MainInfo from "./components/main-info";

const Quote = (props) => {
  return (
    <div className={Styles.quote}>
      <MainInfo />
    </div>
  );
};

export default Quote;
