import React from "react";
import ReactDOM from "react-dom";
import Styles from "./termsandconditionsmodal.module.scss";

const TermsModal = ({ children, isModalOpened }) => {
  console.log(isModalOpened, "from is modal opened");
  return ReactDOM.createPortal(
    <div
      className={Styles.modal}
      style={isModalOpened ? { top: "0" } : { top: "100%" }}
    >
      {children}
    </div>,
    document.getElementById("terms-and-conditions")
  );
};

export default TermsModal;
