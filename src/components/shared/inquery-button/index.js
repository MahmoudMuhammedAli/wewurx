import React, { useRef, useState, useEffect } from "react";
import Styles from "./inquery-button.module.scss";

const InqueryButton = ({ children }) => {
  const [isInqueryBoxOpened, setIsInqueryBoxOpened] = useState(false);

  const closeInqueryBox = () => {
    setIsInqueryBoxOpened(false);
  };
  const openInqueryBox = () => {
    setIsInqueryBoxOpened(true);
  };
  const toggleInqueryBox = () => {
    if (isInqueryBoxOpened) {
      return closeInqueryBox();
    }
    openInqueryBox();
  };

  const handleInqueryHover = (e) => {
    e.target.className = "fa fa-question-circle";
  };

  const handleInqueryMouseOut = (e) => {
    e.target.className = "fa fa-question-circle-o";
  };

  return (
    <div className={Styles.inquieryContainer}>
      <i
        onClick={toggleInqueryBox}
        className='fa fa-question-circle-o'
        onMouseOver={handleInqueryHover}
        onMouseLeave={handleInqueryMouseOut}
      ></i>
      <div
        className={Styles.inquieryContainer__dropdowncontainer}
        style={{ display: isInqueryBoxOpened ? "block" : "none" }}
      >
        <div className={Styles.inquieryContainer__box__triangle}></div>
        <div className={Styles.inquieryContainer__box}>{children}</div>
      </div>
    </div>
  );
};

export default InqueryButton;
