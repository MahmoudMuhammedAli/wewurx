import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./schedularcolor.module.scss";

const SchedularColor = (props) => {
  const [color, setColor] = useState("#4d4d4d");
  const [customInputColor, setCustomInputColor] = useState(color);

  const handleColorSelectorChange = (e) => {
    setColor(e.target.value);
    setCustomInputColor(e.target.value);
  };
  const handleCustomInputColorChange = (e) => {
    setCustomInputColor(e.target.value);
    // if this custominputcolor is a valid color then set the colorpicker value to it
  };
  return (
    <div className={Styles.schedularcolor}>
      <div className={Styles.schedularcolor__colorselectorwrapper}>
        <label className={Styles.schedularcolor__label}>Schedular color</label>
        <div className={Styles.schedularcolor__inputs}>
          <div>
            <input
              name='colorInput'
              type='text'
              className={` ${Styles.schedularcolor__input}`}
              value={customInputColor}
              onChange={handleCustomInputColorChange}
              placeholder='hexadecimal color'
            />
            <input
              name='colorPicker'
              type='color'
              className={` ${Styles.schedularcolor__input} ${Styles.schedularcolor__inputColor}`}
              value={color}
              onChange={handleColorSelectorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedularColor;
