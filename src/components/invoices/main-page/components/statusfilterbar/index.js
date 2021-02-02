import React from "react";
import Styles from "./statusfilterbar.module.scss";

const StatusBar = (props) => {
  return (
    <div className={Styles.statusbar}>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__issued}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Issued</span>
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
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__partpaid}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>
            Part-Paid
          </span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__paid}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Paid</span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__overdue}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Overdue</span>
        </div>
      </div>
      <div className={Styles.statusbar__status}>
        <div className={Styles.statusbar__status__number}>
          <span className={`${Styles.statusbar__status__name__color} `}></span>0
        </div>
        <div className={Styles.statusbar__status__name}>
          <span
            className={`${Styles.statusbar__status__name__color} ${Styles.statusbar__void}`}
          ></span>
          <span className={Styles.statusbar__status__name__name}>Void</span>
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
