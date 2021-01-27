import React, { useEffect, useRef, useState } from "react";
import Styles from "./staffrates.module.scss";

const StaffRates = (props) => {
  const toggleInputRef = useRef(null);
  const [isToggleButtonOpened, setIsToggleButtonOpened] = useState(false);

  useEffect(() => {
    const handleToggleButtonClick = (e) => {
      if (e.target !== toggleInputRef.current) {
        return;
      }
      if (isToggleButtonOpened) {
        return setIsToggleButtonOpened(false);
      }
      setIsToggleButtonOpened(true);
    };

    toggleInputRef.current.addEventListener("click", handleToggleButtonClick);

    return () => {
      if (toggleInputRef.current) {
        toggleInputRef.current.removeEventListener(
          "click",
          handleToggleButtonClick
        );
      }
    };
  }, [isToggleButtonOpened]);

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
          <label className={Styles.rates__label}>Allow overtime</label>
          <div className={Styles.rates__allowovertime__togglebuttonwrapper}>
            <label
              className={`${
                isToggleButtonOpened ? Styles.rates__togglecontainerActive : ""
              } ${Styles.rates__togglecontainer}`}
            >
              <input
                type='checkbox'
                className={Styles.rates__toggleinput}
                ref={toggleInputRef}
              />
              <span
                className={` ${
                  isToggleButtonOpened ? Styles.rates__togglebuttonActive : ""
                } ${Styles.rates__togglebutton}`}
              ></span>
            </label>
          </div>
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
