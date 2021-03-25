import React, { useRef, useEffect, useState } from "react";
import Styles from "./customer-selector.module.scss";
import AddCustomer from "../addcustomer";
const CustomerSelector = (props) => {
  const selectorBoxRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    let isSelectOpen = false;
    const openSelect = () => {
      selectRef.current.style.transform = "scaleY(1)";
      isSelectOpen = true;
    };
    //closing the select
    const closeSelect = () => {
      selectRef.current.style.transform = "scaleY(0)";
      isSelectOpen = false;
    };
    selectorBoxRef.current.addEventListener("click", (e) => {
      // we did that to ensure that the click event comes from the box it self not from any other element
      if (e.target !== selectorBoxRef.current) return;
      if (isSelectOpen) {
        return closeSelect();
      }
      openSelect();
    });
  }, []);

  return (
    <div className={Styles.customerselector}>
      <div className={Styles.addjob__customerseletor}>
        <AddCustomer />
        <div
          className={Styles.addjob__customerseletor__box}
          ref={selectorBoxRef}
        >
          <span className={Styles.addjob__customerseletor__label}>
            customer
          </span>
          <i className='fa fa-arrow-down fa-lg'></i>
          <span className={Styles.addjob__customerseletor__selected}>
            wewurx
          </span>
          <div
            className={Styles.addjob__customerseletor__select}
            ref={selectRef}
          >
            <div className={Styles.addjob__customerseletor__select__alert}>
              <div>
                no{" "}
                <span
                  className={Styles.addjob__customerseletor__select__customers}
                >
                  customers
                </span>{" "}
                available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerSelector;
