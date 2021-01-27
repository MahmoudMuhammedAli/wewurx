import React from "react";
import Styles from "./details.module.scss";
import BasicInfo from "./components/basicinfo";
import Permissions from "./components/permissions";
import StaffRates from "./components/staffrates";
import SchedularColor from "./components/schedularcolor";
import Teams from "./components/teams";
import Skills from "./components/skills";

const Details = (props) => {
  return (
    <div className={Styles.details}>
      <BasicInfo />
      <Permissions />
      <StaffRates />
      <SchedularColor />
      <Teams />
      <Skills />
    </div>
  );
};
export default Details;
