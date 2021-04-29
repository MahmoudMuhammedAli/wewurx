import React from "react";
import Styles from "./layout-selector.module.scss";

const LayoutSelector = (props) => {
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
  return (
    <ul className={Styles.selector} onClick={handleUlClick}>
      <li className={`${Styles.selector__itemActive} ${Styles.selector__item}`}>
        <button className={`${Styles.selector__btn}`}>Timeline</button>
      </li>
      <li className={Styles.selector__item}>
        <button className={Styles.selector__btn}>Day</button>
      </li>
      <li className={Styles.selector__item}>
        <button className={Styles.selector__btn}>Weekl</button>
      </li>
      <li className={Styles.selector__item}>
        <button className={Styles.selector__btn}>Month</button>
      </li>
    </ul>
  );
};

export default LayoutSelector;
