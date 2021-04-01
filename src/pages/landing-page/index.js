import React from "react";
import Styles from "./landing-page.module.scss";
import InfoBar from "../../components/shared/infobar";

const LandingPage = (props) => {
  return (
    <div className={Styles.landingpage}>
      {" "}
      <InfoBar /> Landing Page Goes Here
    </div>
  );
};
export default LandingPage;
