import React from "react";
import Styles from "./footer.module.scss";

const Footer = ({ setIsDropDownOpened }) => {
  const handleCloseClick = () => {
    setIsDropDownOpened(false);
  };
  return (
    <footer className={Styles.footer}>
      <button className={Styles.footer__btn} onClick={handleCloseClick}>
        Close
      </button>
      <button className={Styles.footer__btn}>Delete</button>
      <button className={Styles.footer__btn}>Edit job</button>
      <button className={Styles.footer__btn}>Save</button>
    </footer>
  );
};

export default Footer;
