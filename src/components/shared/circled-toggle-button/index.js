import React, { useRef, useState } from "react";
import Styles from "./circled-toggle-button.module.scss";
import { Field, reduxForm } from "redux-form";

const CircledToggleButton = ({ name, id }) => {
  const toggleInputRef = useRef(null);
  const [isToggleButtonOpened, setIsToggleButtonOpened] = useState(false);
  const handleToggleButtonClick = (value) => {
    if (isToggleButtonOpened) {
      setIsToggleButtonOpened(false);
      return value;
    }
    setIsToggleButtonOpened(true);
    return value;
  };

  return (
    <div className={Styles.togglebuttonwrapper}>
      <label
        className={`${
          isToggleButtonOpened ? Styles.togglecontainerActive : ""
        } ${Styles.togglecontainer}`}
      >
        <Field
          type='checkbox'
          className={Styles.toggleinput}
          onClick={handleToggleButtonClick}
          ref={toggleInputRef}
          component='input'
          name={name}
          normalize={handleToggleButtonClick}
          id={id}
        />
        <span
          className={` ${
            isToggleButtonOpened ? Styles.togglebuttonActive : ""
          } ${Styles.togglebutton}`}
        ></span>
      </label>
    </div>
  );
};
export default reduxForm({ form: "circledToggleButton" })(CircledToggleButton);
