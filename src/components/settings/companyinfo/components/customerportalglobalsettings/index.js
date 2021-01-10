import React, { useEffect, useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./customerportalglobalsettings.module.scss";

const renderCheckBox = ({ input, inputRef }) => {
  return (
    <input
      type='checkbox'
      {...input}
      ref={inputRef}
      className={Styles.globalsettings__activebutton__input}
    />
  );
};

const CustomerGlobalSettings = (props) => {
  const activeButtonRef = useRef(null);
  const [IsActiveButtonOpened, setIsActiveButtonOpened] = useState(false);
  const isActiveInputRef = useRef(null);

  useEffect(() => {
    const handleActiveButtonClick = (e) => {
      if (IsActiveButtonOpened) {
        isActiveInputRef.current.click();
        return setIsActiveButtonOpened(false);
      }
      isActiveInputRef.current.click();
      setIsActiveButtonOpened(true);
    };
    if (activeButtonRef.current) {
      activeButtonRef.current.addEventListener(
        "click",
        handleActiveButtonClick
      );
    }
    return () => {
      if (activeButtonRef.current) {
        activeButtonRef.current.removeEventListener(
          "click",
          handleActiveButtonClick
        );
      }
    };
  }, [activeButtonRef.current, IsActiveButtonOpened]);
  return (
    <div className={Styles.globalsettings}>
      <h3 className={Styles.globalsettings__heading}>
        Customer Portal global settings
      </h3>
      <div className={Styles.globalsettings__options}>
        <div className={Styles.globalsettings__options__label}>Allow/Show</div>
        <div className={Styles.globalsettings__options__options}>
          <div
            className={`${Styles.globalsettings__activebutton} ${
              IsActiveButtonOpened
                ? Styles.globalsettings__activebuttonActive
                : ""
            } `}
            ref={activeButtonRef}
          >
            <span
              className={Styles.globalsettings__activebutton__button}
            ></span>
            <Field
              component={renderCheckBox}
              name='isActive'
              inputRef={isActiveInputRef}
            />
          </div>
          <div className={Styles.globalsettings__options__options__option}>
            <label>
              <Field name='showQuotes' component='input' type='checkbox' />{" "}
              Quotes
            </label>
          </div>
          <div className={Styles.globalsettings__options__options__option}>
            <label>
              <Field name='showJobs' component='input' type='checkbox' /> Jobs
            </label>
          </div>
          <div className={Styles.globalsettings__options__options__option}>
            <label>
              <Field name='showInvoices' component='input' type='checkbox' />{" "}
              Invoices
            </label>
          </div>
          <div className={Styles.globalsettings__options__options__option}>
            <label>
              <Field
                name='viewOfficeAndFieldWorkersNotes'
                component='input'
                type='checkbox'
              />{" "}
              View office and field workers notes
            </label>
          </div>
          <div className={Styles.globalsettings__options__options__option}>
            <label>
              <Field
                name='creditCardPayment'
                component='input'
                type='checkbox'
              />{" "}
              Credit card payment (require <span>Integration</span>)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "customerPortalGlobalSettings" })(
  CustomerGlobalSettings
);
