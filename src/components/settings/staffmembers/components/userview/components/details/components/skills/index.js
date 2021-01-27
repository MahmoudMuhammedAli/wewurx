import React from "react";
import Styles from "./skills.module.scss";

const Skills = (props) => {
  return (
    <div className={Styles.skills}>
      <h4 className={Styles.skills__heading}>Skills</h4>
      <button className={Styles.skills__button}>Manage Skills</button>
    </div>
  );
};

export default Skills;
