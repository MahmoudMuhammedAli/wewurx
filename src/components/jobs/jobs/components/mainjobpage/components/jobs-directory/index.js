import React, { useEffect, useState } from "react";
import { reduxForm } from "redux-form";
import JobsHeading from "../job-heading";
import JobItem from "../job-item";
import Styles from "./jobs-directory.module.scss";
const preloadedJobs = [
  {
    jobID: "SOM0",
    jobName: "Intermediate Name",
    status: "pending",
    amount: 400,
    customer: [
      "customer fname customer lname",
      "SomeExample@example.com",
      "0238969710",
      "01102076772",
    ],
    site: "ER Rahawie Giza Egypt",
    dueDate: "21/11/2020",
    scheduled: "20/10/2021",
    assignedTo: "Alex Browckenbrow",
    status: "pending",
    name: "jobName",
  },
  {
    jobID: "SOM1",
    name: "Long Job Name ",
    amount: 0,
    customer: [
      "customer name",
      "SomeExample@example.com",
      "0238969710",
      "01102076772",
    ],
    site: "ER Rahawie Giza Egypt",
    dueDate: "21/11/2020",
    scheduled: "20/10/2021",
    assignedTo: "Long Worker Name",
    status: "scheduled",
  },
  {
    jobID: "SOM2",
    name: "Job ",
    status: "pending",
    amount: 2,
    customer: [
      "customer name",
      "SomeExample@example.com",
      "0238969710",
      "01102076772",
    ],
    site: "ER Rahawie Giza Egypt",
    dueDate: "21/11/2020",
    scheduled: "20/10/2021",
    assignedTo: "Mohamed Sa3fan",
    status: "travelling",
  },
];
const JobsDirectory = (props) => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    setJobs(preloadedJobs);
  }, []);
  const renderJobs = () => {
    if (!jobs) return <div>Loading....</div>;

    return jobs.map((job) => {
      // give each job a name for the reduxForm to obtain the value of the checkbox of it
      const DecoratedJobItem = reduxForm({ form: job.jobID })(JobItem);
      return <DecoratedJobItem {...job} key={job.jobID} />;
    });
  };
  return (
    <div className={Styles.jobs}>
      <JobsHeading />
      {renderJobs()}
    </div>
  );
};

export default JobsDirectory;
