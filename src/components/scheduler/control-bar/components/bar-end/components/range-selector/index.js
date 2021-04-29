import React, { useReducer, useRef } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./range-selector.module.scss";

const renderSelector = ({ input, selectRef }) => {
  const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const options = days.map((item, index) => {
    const dayNumbers = index + 1;
    if (index == 0) return <option value={dayNumbers}>{dayNumbers} day</option>;
    return <option value={dayNumbers}>{dayNumbers} days</option>;
  });

  return (
    <select {...input} className={Styles.selector__select} ref={selectRef}>
      {options}
    </select>
  );
};

const RangeSelector = (props) => {
  const selectRef = useRef(null);

  const handleBoxClick = () => {
    selectRef.current.click();
  };
  return (
    <div className={Styles.selector}>
      <span>Show</span>{" "}
      <div>
        <Field name='days' component={renderSelector} selectRef={selectRef} />
      </div>
    </div>
  );
};

export default reduxForm({ form: "schedulerRangeSelector" })(RangeSelector);
