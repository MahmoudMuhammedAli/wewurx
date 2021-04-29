import React from "react";
import BarEnd from "./components/bar-end";
import DatesInfo from "./components/dates-info";
import Styles from "./control-bar.module.scss";

const ControlBar = (props) => {
  return (
    <div className={Styles.bar}>
      <DatesInfo startDate={new Date()} range={8} />
      <BarEnd />
    </div>
  );
};

export default ControlBar;
