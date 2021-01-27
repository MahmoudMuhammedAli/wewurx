import React from "react";
import Styles from "./teams.module.scss";

const Teams = (props) => {
  return (
    <div className={Styles.teams}>
      <h3 className={Styles.teams__heading}>teams</h3>
      <main className={Styles.teams__main}>
        <h5 className={Styles.teams__main__heading}>Main teams</h5>
        <select className={Styles.teams__main__select}></select>
        <button className={Styles.teams__main__button}>
          <i className='fa fa-plus'></i>
        </button>
      </main>
    </div>
  );
};
export default Teams;
