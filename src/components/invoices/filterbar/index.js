import React from "react";
import Styles from "./firstfilterbar.module.scss";
import propsTypes from "prop-types";

const FilterBar = (props) => {
  const renderFilters = () =>
    props.categories.map(({ filter, item }) => {
      return (
        <span className={`${Styles.filterbar__item}`} key={item}>
          {item}
          <span className={`${Styles.filterbar__item__filter}`}>{filter}</span>
        </span>
      );
    });
  return (
    <div className={`${Styles.filterbar}`}>
      <span
        className={`${Styles.filterbar__item} ${Styles.filterbar__itemActive}`}
      >
        Filter{" "}
        <i
          className={`fa  fa-arrow-circle-down fa-lg ${Styles.filterbar__item__arrow}`}
        ></i>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        status
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Customer
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
      <span className={`${Styles.filterbar__item}`}>
        Date
        <span className={`${Styles.filterbar__item__filter}`}>All</span>
      </span>
    </div>
  );
};

export default FilterBar;
