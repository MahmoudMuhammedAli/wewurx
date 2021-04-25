import React from "react";
import UnScheduledJob from "../unscheduled-job";
import Styles from "./unscheduled-job-directory.module.scss";

const UnScheduledJobDdirectory = (props) => {
  return (
    <div className={Styles.directory}>
      <UnScheduledJob />
      <UnScheduledJob />
      <UnScheduledJob />
      <UnScheduledJob />
      <UnScheduledJob
        jobNumber={7}
        jobName='Job name different'
        jobDurationQuantitiy={1}
        jobDurationWeight='hour'
        customerFName='different Customer fname'
        customerLName='different Customer lname'
      />
      <UnScheduledJob
        jobNumber={10}
        jobName='JobName'
        jobDurationQuantitiy={1}
        jobDurationWeight='hour'
        customerFName=' Customer fname'
        customerLName=' Customer lname'
      />
    </div>
  );
};

export default UnScheduledJobDdirectory;
