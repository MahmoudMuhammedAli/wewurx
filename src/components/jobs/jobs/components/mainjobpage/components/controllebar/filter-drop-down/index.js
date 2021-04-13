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
import Priority from "./components/priority";

const FilterDropDown = ({ setIsDropDownOpened }) => {
  const [page, setPage] = useState({ status: true });
  const dropdownRef = useRef(null);
  useEffect(() => {
    dropdownRef.current.scrollIntoView();
  }, []);
  const renderComponent = () => {
    if (page.status) return <Status />;
    if (page.dueDate) return <DueDate />;
    if (page.date) return <DatePage />;
    if (page.customer) return <Customer />;
    if (page.customeField) return <CustomField />;
    if (page.asset) return <Assets />;
    if (page.site) return <Site />;
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
