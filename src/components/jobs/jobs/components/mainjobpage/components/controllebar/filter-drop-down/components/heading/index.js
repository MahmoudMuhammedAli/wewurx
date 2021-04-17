import React from "react";
import Styles from "./heading.module.scss";

const Heading = (props) => {
  return <h3 className={Styles.heading}>{props.children}</h3>;
};

export default Heading;
