import React from "react";
import { useDispatch } from "react-redux";
import { changeSchedulerView } from "../../../../../../../actions";
import Styles from "./layout-selector.module.scss";

const LayoutSelector = ({}) => {
  const dispatch = useDispatch();
  const handleUlClick = (e) => {
    // remove all  the active classes
    const ul = e.target.closest("ul");
    const lis = ul.getElementsByTagName("li");
    const closestLi = e.target.closest("li");
    for (let li of lis) {
      li.classList.remove(Styles.selector__itemActive);
    }
    closestLi.classList.add(Styles.selector__itemActive);
    // get the closest li and add to it the class active
  };
  const changeView = (view) => {
    dispatch(changeSchedulerView(view));
  };
  return (
    <ul className={Styles.selector} onClick={handleUlClick}>
      <li
        className={`${Styles.selector__itemActive} ${Styles.selector__item}`}
        onClick={() => changeView("timeline")}
      >
        <button className={`${Styles.selector__btn}`}>Timeline</button>
      </li>
      <li className={Styles.selector__item} onClick={() => changeView("day")}>
        <button className={Styles.selector__btn}>Day</button>
      </li>
      <li className={Styles.selector__item} onClick={() => changeView("week")}>
        <button className={Styles.selector__btn}>Week</button>
      </li>
      <li className={Styles.selector__item} onClick={() => changeView("month")}>
        <button className={Styles.selector__btn}>Month</button>
      </li>
    </ul>
  );
};

export default LayoutSelector;
