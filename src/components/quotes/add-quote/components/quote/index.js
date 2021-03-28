import React from "react";
import Styles from "./quote.module.scss";
import MainInfo from "./components/main-info";
import Description from "./components/description";
import Address from "./components/address";
import Assets from "./components/assets";
import DateAdded from "./components/date-added";

const Quote = (props) => {
  return (
    <div className={Styles.quote}>
      <MainInfo />
      <Description />
      <Address />
      <Assets />
      <DateAdded />

      <div className={Styles.quote__savebtnContainer}>
        <button className={Styles.quote__savebtn}>Save</button>
      </div>
    </div>
  );
};

export default Quote;
