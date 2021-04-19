import React, { useEffect, useRef, useState } from "react";
import { Field } from "redux-form";
import Styles from "./filter-drop-down.module.scss";
import Status from "./components/status";
import DueDate from "./components/due-date";
import DatePage from "./components/date";
import Customer from "./components/customer";
import CustomField from "./components/custom-field";
import Assets from "./components/assets";
import Site from "./components/site";
import Bar from "./components/bar";
import Footer from "./components/footer";
import Header from "./components/header";
import FieldWorker from "./components/field-worker";
import Teams from "./components/team";
import StaffSkills from "./components/staff-skills";
import JobType from "./components/job-type";
import InvoiceStatus from "./components/invoice-status";

const FilterDropDown = ({ setIsDropDownOpened }) => {
  const [page, setPage] = useState({ status: true });
  const dropdownRef = useRef(null);
  useEffect(() => {
    dropdownRef.current.scrollIntoView();
  }, []);
  const renderComponent = () => {
    if (page.status) return <Status />;
    if (page.customer) return <Customer />;
    if (page.site) return <Site />;
    if (page.fieldWorker) return <FieldWorker />;
    if (page.teams) return <Teams />;
    if (page.staffSkills) return <StaffSkills />;
    if (page.dueDate) return <DueDate />;
    if (page.date) return <DatePage />;
    if (page.jobType) return <JobType />;
    if (page.invoiceStatus) return <InvoiceStatus />;
    if (page.customeField) return <CustomField />;
    if (page.asset) return <Assets />;
  };
  return (
    <div className={Styles.dropdown} ref={dropdownRef}>
      <Header setIsDropDownOpened={setIsDropDownOpened} />
      <main className={Styles.dropdown__main}>
        <Bar setPage={setPage} />
        {renderComponent()}
      </main>
      <Footer setIsDropDownOpened={setIsDropDownOpened} />
    </div>
  );
};

export default FilterDropDown;
