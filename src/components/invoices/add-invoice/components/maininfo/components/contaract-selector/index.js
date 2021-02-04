import React, { useEffect, useRef, useState } from "react";
import Styles from "./contract-selector.module.scss";
import { Field, reduxForm } from "redux-form";

const ContractSelector = (props) => {
  const [isDropDownOpened, setIsDropDownOPened] = useState(false);
  const selectboxRef = useRef(null);
  const dropdownRef = useRef(null);

  const openDropDown = () => {
    setIsDropDownOPened(true);
    dropdownRef.current.style.transform = "scaleY(1)";
    setTimeout(() => {
      dropdownRef.current.style.maxHeight = "100rem";
    }, 100);
  };
  const closeDropDown = () => {
    setIsDropDownOPened(false);
    dropdownRef.current.style.maxHeight = "0";

    setTimeout(() => {
      dropdownRef.current.style.transform = "scaleY(0)";
    }, 200);
  };

  const handleSelectoBoxClick = (e) => {
    if (e.target !== selectboxRef.current) return;

    if (isDropDownOpened) return closeDropDown();

    openDropDown();
  };

  return (
    <div className={Styles.selector}>
      <h4 className={Styles.selector__label}>Contract</h4>
      <div
        className={Styles.selector__selectbox}
        ref={selectboxRef}
        onClick={handleSelectoBoxClick}
      >
        <i className='fa fa-arrow-circle-down'></i>
        <div className={Styles.selector__dropdown} ref={dropdownRef}>
          <div className={Styles.selector__dropdown__searchbox}>
            <Field
              name=''
              component='input'
              type='text'
              className={Styles.selector__dropdown__searchbox__input}
            />
            <i className='fa fa-search'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "contractSelector" })(ContractSelector);
