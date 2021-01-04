import React from "react";
import Styles from "./jobduration.module.scss";

const JobDuration = (props) => {
  return (
    <div className={Styles.jobduration}>
      <div className={Styles.jobduration__jobdurationlabel}>Job duration</div>
      <div className={Styles.jobduration__duration}>3 Hours</div>
      <div className={Styles.jobduration__duedatelabel}>Due date</div>
      <div className={Styles.jobduration__duedate}>
        {new Date().toGMTString().substring(0, 16)}
      </div>
    </div>
  );
};

export default JobDuration;
