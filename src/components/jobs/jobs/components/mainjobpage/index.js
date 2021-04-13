import React from "react";
import Styles from "./mainjobpage.module.scss";
import StatusBar from "./components/statusfilterbar";
import ControllBar from "./components/controllebar";
import JobHeading from "./components/job-heading";
import Job from "./components/job-item";
import FilterBar from "../../../../shared/filterbar";
import JobsDirectory from "./components/jobs-directory";

const MainJobPage = (props) => {
  return (
    <div className={Styles.jobs}>
      {/* <FilterBar categories={filters} /> */}
      <StatusBar />
      <ControllBar />
      <JobsDirectory />
    </div>
  );
};
export default MainJobPage;

//const filters = [
//   {
//     item: "Status",
//     filter: "All",
//   },
//   {
//     item: "Priority",
//     filter: "All",
//   },
//   {
//     item: "Customers",
//     filter: "All",
//   },
//   {
//     item: "Site",
//     filter: "All",
//   },
//   {
//     item: "Workever",
//     filter: "All",
//   },
//   {
//     item: "Teams",
//     filter: "All",
//   },
//   {
//     item: "Stuff Skills",
//     filter: "All",
//   },
//   {
//     item: "Date",
//     filter: "All",
//   },
//   {
//     item: "Job Types",
//     filter: "All",
//   },
//   {
//     item: "Invoice Status",
//     filter: "All",
//   },
//   {
//     item: "Custom Fields",
//     filter: "All",
//   },
//   {
//     item: "Due Date",
//     filter: "All",
//   },
// ];
