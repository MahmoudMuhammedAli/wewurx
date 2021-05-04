import React from "react";
import Styles from "./bar-end.module.scss";
import LayoutSelector from "./components/layout-selector";
import RangeNavigator from "./components/range-navigator";
import RangeSelector from "./components/range-selector";

const BarEnd = () => {
  return (
    <div className={Styles.barend}>
      <RangeSelector />
      <LayoutSelector />
      <RangeNavigator />
    </div>
  );
};

export default BarEnd;
