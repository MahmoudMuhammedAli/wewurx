import React from "react";
import Styles from "./mainjobpage.module.scss";
import StatusBar from "./components/statusfilterbar";
import ControllBar from "./components/controllebar";
import CustomerFilterBar from "./components/customerfilterbar";
import Customer from "./components/customer";
import FilterBar from "../../../../shared/filterbar";

const MainJobPage = (props) => {
  const filters = [
    {
      item: "Status",
      filter: "All",
    },
    {
      item: "Priority",
      filter: "All",
    },
    {
      item: "Customers",
      filter: "All",
    },
    {
      item: "Site",
      filter: "All",
    },
    {
      item: "Workever",
      filter: "All",
    },
    {
      item: "Teams",
      filter: "All",
    },
    {
      item: "Stuff Skills",
      filter: "All",
    },
    {
      item: "Date",
      filter: "All",
    },
    {
      item: "Job Types",
      filter: "All",
    },
    {
      item: "Invoice Status",
      filter: "All",
    },
    {
      item: "Custom Fields",
      filter: "All",
    },
    {
      item: "Due Date",
      filter: "All",
    },
  ];
  return (
    <div className={Styles.jobs}>
      <FilterBar categories={filters} />
      <StatusBar />
      <ControllBar />
      <CustomerFilterBar />
      <Customer status="scheduled" />
      <Customer status="pending" />
    </div>
  );
};
export default MainJobPage;
