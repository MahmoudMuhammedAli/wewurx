import React, { useState } from "react";
import FilterDropDown from "../filter-drop-down";
import Styles from "./filterbar.module.scss";
const FilterBar = (props) => {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  return (
    <div className={`${Styles.filterbar}`}>
      {isDropDownOpened ? (
        <FilterDropDown setIsDropDownOpened={setIsDropDownOpened} />
      ) : (
        ""
      )}
      <span
        onClick={() => setIsDropDownOpened(true)}
        className={`${Styles.filterbar__item} ${Styles.filterbar__itemActive}`}
      >
        Filter{" "}
        <i
          className={`fa  fa-arrow-circle-down fa-lg ${Styles.filterbar__item__arrow}`}
        ></i>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Status
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Customer
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Site
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Date
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Due Date
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Asset
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Custom field
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
    </div>
  );
};

export default FilterBar;
