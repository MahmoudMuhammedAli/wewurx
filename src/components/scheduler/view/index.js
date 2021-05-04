import React, { useState } from "react";
import Week from "./components/week";
import Day from "./components/day";
import Month from "./components/month";
import Timeline from "./components/timeline";
import Styles from "./view.module.scss";
import { useSelector } from "react-redux";

const View = ({}) => {
  const view = useSelector((state) => state.schedulerView);
  const renderView = () => {
    if (view.timeline) return <Timeline />;
    if (view.day) return <Day />;
    if (view.week) return <Week />;
    if (view.month) return <Month />;
  };
  return <div className={Styles.view}>{renderView()}</div>;
};
export default View;
