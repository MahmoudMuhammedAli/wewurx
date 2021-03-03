import React from "react";
import Styles from "./statusbar.module.scss";

const StatusBar = (props) => {
  return (
    <div className={Styles.statusbar}>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__draft}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Draft</span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__draftCompleted}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>
            Draft Completed
          </span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__sent}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Sent</span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__onHold}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>On-hold</span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__rejected}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Rejected</span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__accepted}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Accepted</span>
        </div>
      </div>
      <div
        className={`${Styles.statusbar__status} ${Styles.statusbar__statusAll}`}
      >
        <div className={Styles.statusbar__status__number}></div>
        <div className={Styles.statusbar__status__name}>
          <span className={Styles.statusbar__status__name__name}>All</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
