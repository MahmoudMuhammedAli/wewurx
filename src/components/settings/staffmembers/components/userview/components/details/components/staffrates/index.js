import React, { useEffect, useRef, useState } from "react";
import CircledToggleButton from "../../../../../../../../shared/circled-toggle-button";
import Styles from "./staffrates.module.scss";

const StaffRates = (props) => {
  return (
    <div className={Styles.rates}>
      <h3 className={Styles.rates__heading}>Staff rates</h3>

      <div className={Styles.rates__buyrates}>
        <h4 className={Styles.rates__buyrates__heading}>Buy rates</h4>
        <div className={Styles.rates__buyrates__inputs}>
          <div className={Styles.rates__buyrates__inputs__inputcontainer}>
            <label className={Styles.rates__label}>Base</label>
            <div className={Styles.rates__buyrates__inputs__inputwrapper}>
              <span
                className={Styles.rates__buyrates__inputs__inputwrapper__icon}
              >
                £
              </span>
              <input
                className={Styles.rates__buyrates__inputs__inputwrapper__input}
                type='text'
              />
            </div>
          </div>

          <div className={Styles.rates__buyrates__inputs__inputcontainer}>
            <label className={Styles.rates__label}>Base</label>
            <div className={Styles.rates__buyrates__inputs__inputwrapper}>
              <span
                className={Styles.rates__buyrates__inputs__inputwrapper__icon}
              >
                £
              </span>
              <input
                className={Styles.rates__buyrates__inputs__inputwrapper__input}
                type='text'
              />
            </div>
          </div>
        </div>
        <div className={Styles.rates__allowovertime}>
          <label className={Styles.rates__label} htmlFor='allowOverTime'>
            Allow overtime
          </label>
          <CircledToggleButton name='isOverTimeAllowed' id='allowOverTime' />
        </div>

        <div className={Styles.rates__standardrates}>
          <label className={Styles.rates__label}>Standard rate</label>
          <select className={Styles.rates__standardrates__select}></select>
        </div>
      </div>
    </div>
  );
};
export default StaffRates;
//${Styles.rates__togglebuttonActive}
