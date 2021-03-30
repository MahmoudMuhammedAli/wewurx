import React from "react";
import Description from "./components/description";
import MainInfo from "./components/main-info";
import SiteAddress from "./components/site-address";
import QuoteExpiration from "./components/quote-expiration";
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
      <SiteAddress />
      <QuoteExpiration />
    </div>
  );
};

export default Quote;
