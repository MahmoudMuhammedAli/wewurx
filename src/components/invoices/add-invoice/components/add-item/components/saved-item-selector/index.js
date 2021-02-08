import React, { useReducer, useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./saved-item-selector.module.scss";

const SavedItemSelector = (props) => {
  const [isDropdownOpened, setIsDropDownOpened] = useState(false);

  const openDropDown = () => {
    setIsDropDownOpened(true);
  };

  const closeDropDown = () => {
    setIsDropDownOpened(false);
  };

  const handleInputFocus = () => {
    openDropDown();
  };

  const handleInputBlur = () => {
    closeDropDown();
  };

  return (
    <>
      <div className={Styles.saveditemsselector}>
        <Field
          name='word'
          component='input'
          type='text'
          className={Styles.saveditemsselector__input}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <h5 className={Styles.saveditemsselector__heading}>Item</h5>
        <i className='fa fa-arrow-circle-down'></i>

        <div
          className={Styles.saveditemsselector__dropdown}
          style={{ display: `${isDropdownOpened ? "block" : "none"}` }}
        >
          <div className={Styles.saveditemsselector__dropdown__noitemsbox}>
            No{" "}
            <span
              className={Styles.saveditemsselector__dropdown__addsaveditemlink}
            >
              items
            </span>{" "}
            available
          </div>
        </div>
      </div>
    </>
  );
};

export default reduxForm({ form: "savedItemSelector" })(SavedItemSelector);
