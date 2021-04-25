import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Styles from "./drop-down.module.scss";

const DropDown = ({ top, left }) => {
  const dropdown = (
    <div
      className={Styles.dropdown}
      style={{ top: `calc(${top}px + 1.5rem)`, left }}
    ></div>
  );

  return ReactDOM.createPortal(
    dropdown,
    document.getElementById("unscheduled-job")
  );
};

export default DropDown;
