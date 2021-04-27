import React, { useEffect, useRef } from "react";
import WorkersDirectory from "./components/workers-directory";
import Styles from "./workers-dropdown.module.scss";

const WorkerDropdown = ({
  isWorkersDropdownOpened,
  setIsWorkersDropdownOpened,
  dropdownRef,
}) => {
  return (
    <div className={Styles.dropdown} ref={dropdownRef}>
      <WorkersDirectory />
      <button className={Styles.dropdown__closebtn}>Done</button>
    </div>
  );
};

export default WorkerDropdown;
