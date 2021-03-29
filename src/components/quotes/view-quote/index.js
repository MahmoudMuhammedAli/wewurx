import React from "react";
import SideBar from "./components/sidebar";
import Styles from "./view-quote.module.scss";

const ViewQuote = (props) => {
  return (
    <div className={Styles.viewquote}>
      {" "}
      <SideBar />
    </div>
  );
};

export default ViewQuote;
