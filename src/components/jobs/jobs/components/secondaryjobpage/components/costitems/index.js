import React from "react";
import Styles from "./costitems.module.scss";
import CostItems from "../../../../../../shared/costitems";

const JobCostItems = (props) => {
  return (
    <div className={Styles.costitems}>
      <CostItems />
    </div>
  );
};
export default JobCostItems;
