import React from "react";
import Styles from "./quotesettings.module.scss";
import { Field, reduxForm } from "redux-form";

const QuoteSettings = (props) => {
  return (
    <div className={Styles.settings}>
      <h3 className={Styles.settings__heading}>Quote Settings</h3>
      <div className={Styles.settings__quotenamecontainer}>
        <div className={Styles.settings__quotenamecontainer__quotecollector}>
          <label
            htmlFor='quoteNameCollector'
            className={
              Styles.settings__quotenamecontainer__quotecollector__label
            }
          >
            Quote name
          </label>
          <Field
            name='quoteName'
            component='input'
            type='text'
            className={Styles.settings__input}
            id='quoteNameCollector'
          />
          <input
            name='shouldDisplayQuoteName'
            component='input'
            type='checkbox'
          />
        </div>
        <a
          href='#'
          className={Styles.settings__quotenamecontainer__previewlink}
        >
          Preview
        </a>
      </div>

      <div className={Styles.settings__bottomtextarea}>
        <h4 className={Styles.settings__bottomtextarea__heading}>
          Bottom textarea
        </h4>
        <div className={Styles.settings__bottomtextarea__textareas}>
          <div className={Styles.settings__bottomtextarea__textareas__textarea}>
            <label>
              Left{" "}
              <Field
                component='input'
                type='checkbox'
                name='shouldDispalyLeftTextArea'
              />
            </label>
            <br />
            <Field
              component='textarea'
              name='leftTextArea'
              className={Styles.settings__textarea}
            />
          </div>
          <div className={Styles.settings__bottomtextarea__textareas__textarea}>
            {" "}
            <label>
              Right{" "}
              <Field
                component='input'
                type='checkbox'
                name='shouldDispalyRightTextArea'
              />
            </label>
            <br />
            <Field
              component='textarea'
              name='rightTextArea'
              className={Styles.settings__textarea}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "quoteSettings" })(QuoteSettings);
