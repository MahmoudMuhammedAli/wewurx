import React from "react";
import Styles from "./statusfilterbar.module.scss";

const StatusBar = (props) => {
  return (
    <div className={Styles.statusbar}>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>0</div>
        <div className={Styles.statusbar__status__name}>Pending</div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>2</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name2}`}
        >
          Scheduled
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>0</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name3}`}
        >
          Travelling
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>0</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name4}`}
        >
          In Progress
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>13</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name5}`}
        >
          Completed
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>2</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name6}`}
        >
          On hold
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>0</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name7}`}
        >
          Attention
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>0</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name8}`}
        >
          Cancled{" "}
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>0</div>
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name9}`}
        >
          External
        </div>
      </div>
      <div
        className={`${Styles.statusbar__status} ${Styles.statusbar__statusAll}`}
      >
        <div
          className={`${Styles.statusbar__status__name} ${Styles.statusbar__status__name10}`}
        >
          All
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
