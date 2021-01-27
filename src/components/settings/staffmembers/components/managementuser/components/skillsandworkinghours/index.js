import React from "react";
import Styles from "./skillsandworkinghours.module.scss";

const SkillsAndWorkingHours = () => {
  return (
    <div className={Styles.skills}>
      <h3 className={Styles.skills__heading}>
        {" "}
        Skills and working hours can be added after this worker is saved
      </h3>
    </div>
  );
};

export default SkillsAndWorkingHours;
