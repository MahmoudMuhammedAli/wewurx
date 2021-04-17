import React from "react";
import Heading from "../heading";
import ItemsCheckboxes from "../items-checkboxes";
import SearchInput from "../search-input";
import Styles from "./staff-skills.module.scss";

const StaffSkills = (props) => {
  return (
    <div className={Styles.skills}>
      <SearchInput />
      <Heading>Staff skills</Heading>
      <ItemsCheckboxes items={[]} />
    </div>
  );
};

export default StaffSkills;
