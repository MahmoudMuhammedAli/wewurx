import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import StatusSelector from "../../../shared/statusSelector";
import Styles from "./drop-down.module.scss";
import Footer from "./footer";
import WorkerSelector from "./worker-selector";

const DropDown = ({ top, left, setIsDropDownOpened }) => {
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };
  const dropdown = (
    <div
      className={Styles.dropdown}
      style={{ top: `calc(${top}px + 1.5rem)`, left }}
      onClick={handleDropdownClick}
    >
      <header className={Styles.dropdown__header}>
        <h3 className={Styles.dropdown__heading}>job name</h3>
        <p className={Styles.dropdown__id}>HMM3</p>
        <p className={Styles.dropdown__customername}>
          Customer fname Customer lanme
        </p>
      </header>
      <main className={Styles.dropdown__address}>
        <p className={Styles.dropdown__address1}>address</p>
        <p className={Styles.dropdown__address2}>address2</p>
        <p className={Styles.dropdown__city}>City</p>
        <p className={Styles.dropdown__state}>State/Conty</p>
      </main>
      <div className={Styles.dropdown__status}>
        <StatusSelector
          onStatusChange={(status) => console.log(status)}
          width='14rem'
        />
      </div>
      <div className={Styles.dropdown__workerselector}>
        <WorkerSelector />
      </div>
      <Footer setIsDropDownOpened={setIsDropDownOpened} />
    </div>
  );

  return ReactDOM.createPortal(
    dropdown,
    document.getElementById("unscheduled-job")
  );
};

export default DropDown;
