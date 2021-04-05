import React from "react";
import Styles from "./filter-buttons.module.scss";

const FilterButtons = (props) => {
  const handleContainerClick = (e) => {
    if (e.target.tagName.toLowerCase() !== "button") return;

    const btns = e.currentTarget.children;
    // remove all the active button from them;

    for (let btn of btns) btn.classList.remove(Styles.btns__buttonActive);

    // add the active button the event.target

    e.target.classList.add(Styles.btns__buttonActive);
  };

  return (
    <div className={Styles.btns} onClick={handleContainerClick}>
      <button
        className={` ${Styles.btns__buttonActive} ${Styles.btns__button}`}
      >
        1 (1)
      </button>
      <button className={Styles.btns__button}>15</button>
      <button className={Styles.btns__button}>50</button>
      <button className={Styles.btns__button}>70</button>
      <button className={Styles.btns__button}>100</button>
    </div>
  );
};
export default FilterButtons;
