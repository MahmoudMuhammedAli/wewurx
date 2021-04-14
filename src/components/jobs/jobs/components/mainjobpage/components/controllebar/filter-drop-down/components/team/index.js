import React from "react";
import PersonsCheckboxes from "../persons-checkboxes";
import SearchInput from "../search-input";
import Styles from "./team.module.scss";

const Teams = (props) => {
  return (
    <div className={Styles.teams}>
      <SearchInput />
      <h3 className={Styles.teams__heading}>Team</h3>
      <PersonsCheckboxes persons={[]} />
    </div>
  );
};

export default Teams;
