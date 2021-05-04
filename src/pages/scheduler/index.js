import React, { useState } from "react";
import ControlBar from "../../components/scheduler/control-bar";
import InfoBar from "../../components/scheduler/info-bar";
import UnScheduledJobDdirectory from "../../components/scheduler/unscheduled-job-directory";
import View from "../../components/scheduler/view/index";
import Styles from "./schedule.module.scss";

const Scheduler = (props) => {
  return (
    <div className={Styles.schedule}>
      <header className={Styles.schedule__heading}>
        <button className={Styles.schedule__heading__btn}>Scheduling</button>
      </header>
      <main className={Styles.schedule__main}>
        <InfoBar />
        <UnScheduledJobDdirectory />
        <ControlBar />
        <View />
      </main>
    </div>
  );
};

export default Scheduler;
