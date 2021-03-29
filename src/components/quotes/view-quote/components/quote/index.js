import React from "react";
import Description from "./components/description";
import MainInfo from "./components/main-info";
import Styles from "./quote.module.scss";

const Quote = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div className={Styles.quote}>
      <MainInfo id={id} />
      <Description />
    </div>
  );
};

export default Quote;
