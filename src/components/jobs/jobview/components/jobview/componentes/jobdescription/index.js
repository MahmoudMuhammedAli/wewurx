import React from "react";
import Styles from "./jobdescription.module.scss";

const JobDescription = (props) => {
  return (
    <div className={Styles.description}>
      <h3 className={Styles.description__heading}>Job Description</h3>
      <p className={Styles.description__body}>
        Job Description Goes Here .......
      </p>
    </div>
  );
};
export default JobDescription;
