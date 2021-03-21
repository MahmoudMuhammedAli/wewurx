import React from "react";
import QuoteHeader from "./components/quote-header";
import Styles from "./quotes-viewer.module.scss";
import QuoteItem from "./components/quote";

const QuotesViewer = (props) => {
  return (
    <div className={Styles.viewer}>
      <QuoteHeader />
      <QuoteItem />
    </div>
  );
};

export default QuotesViewer;
