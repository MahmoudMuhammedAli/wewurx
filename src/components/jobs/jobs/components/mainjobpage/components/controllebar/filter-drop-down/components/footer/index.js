import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./footer.module.scss";

const Footer = ({ setIsDropDownOpened }) => {
  const [shouldShowSavePresetInput, setShouldShowSavePresetInput] = useState(
    false
  );
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__savepreset}>
        <button
          className={Styles.footer__savepreset__button}
          onClick={() => setShouldShowSavePresetInput((status) => !status)}
        >
          Save as new Preset
        </button>
        <br />
        <Field
          name='newPreset'
          component='input'
          type='text'
          className={Styles.footer__savepreset__input}
          style={{
            display: `${shouldShowSavePresetInput ? "block" : "none"}`,
          }}
        />
      </div>
      <footer className={Styles.footer__footer}>
        <button onClick={() => setIsDropDownOpened(false)}>Cancel</button>
        <button>Delete this preset</button>
        <button>Apply</button>
      </footer>
    </footer>
  );
};

export default reduxForm({ form: "mainJobPageFilterFooter" })(Footer);
