import React from "react";
import QuoteHeader from "./components/quote-header";
import Styles from "./quotes-viewer.module.scss";

const QuotesViewer = (props) => {
  return (
    <div className={Styles.viewer}>
      <QuoteHeader />
    </div>
  );
};

export default QuotesViewer;
