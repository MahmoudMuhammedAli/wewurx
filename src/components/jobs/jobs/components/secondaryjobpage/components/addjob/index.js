import React, { useEffect, useRef, useState } from "react";
import Styles from "./addjob.module.scss";
import AddCustomer from "../addcustomer";
import { reduxForm, Field } from "redux-form";
import StatusSelector from "../statusSelector";
import Priority from "../priority";

const renderLocationInfoFields = ({
  input,
  label,
  placeholder,
  className,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className={Styles.addjob__form__locations__input}>
      <div className={Styles.addjob__form__locations__input__label}>
        <label htmlFor={label}>{label}</label>
      </div>
      <div
        className={`${Styles.addjob__form__locations__input__input} ${className}`}
      >
        <input {...input} type={type} placeholder={placeholder} id={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

const renderField = ({
  input,
  type,
  label,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={`${Styles.addjob__form__input}`}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const AddJob = (props) => {
  const [customers, setCustomer] = useState(null);
  const selectRef = useRef(null);
  // box selector ref
  const selectorBoxRef = useRef(null);
  // flag for the status of the select
  let isSelectOpen = false;
  // opening the select
  const openSelect = () => {
    selectRef.current.style.transform = "scaleY(1)";
    isSelectOpen = true;
  };
  // closing the select
  const closeSelect = () => {
    selectRef.current.style.transform = "scaleY(0)";
    isSelectOpen = false;
  };

  // job status state
  const [jobStatus, setJobStatus] = useState(null);
  // i should have an enum variable from typescript lol
  useEffect(() => {
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
    <div className={Styles.addjob}>
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
          <span className={Styles.addjob__customerselector__selected}>
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
      <form className={Styles.addjob__form}>
        <Field
          component={renderField}
          name='jobName'
          placeholder='Enter job name'
        />
        <StatusSelector setStatus={setJobStatus} />
        <Priority />
        <div className={Styles.addjob__form__jobDescription}>
          <div className={Styles.addjob__form__jobDescription__label}>
            Job Description
          </div>
          <Field name='jobDescription' component='textarea' />
        </div>
        <div className={Styles.addjob__form__addforms}>
          <span>Forms</span>
          <div className={Styles.addjob__form__addforms__center}>
            <div>select form(s) to add to the job</div>
            <div className={Styles.addjob__form__addforms__button}>
              <i className='fa fa-plus fa-lg'></i> Add Form
            </div>
          </div>
        </div>
        <div className={Styles.addjob__form__locations}>
          <span className={Styles.addjob__form__locations__heading}>
            Site address
          </span>
          <Field
            component={renderLocationInfoFields}
            name='address'
            type='text'
            label='Address'
          />
          <Field
            component={renderLocationInfoFields}
            name='address2'
            type='text'
            label=''
          />
          <Field
            component={renderLocationInfoFields}
            name='city'
            type='text'
            label='City'
          />
          <Field
            component={renderLocationInfoFields}
            name='country'
            label='State/Country'
            type='text'
          />
          <Field
            component={renderLocationInfoFields}
            name='postCode'
            label='Post/Zip Code'
            type='text'
            className={Styles.addjob__form__locations__input__inputHalf}
          />
        </div>
        <div className={Styles.addjob__form__maincontacts}>
          <div className={Styles.addjob__form__maincontacts__heading}>
            <input type='radio' id='' name='' value='' checked /> Main contact
          </div>
          <Field
            component={renderLocationInfoFields}
            name='contact'
            label='Contact'
            type='text'
          />
          <Field
            component={renderLocationInfoFields}
            name='contact2'
            label=''
            type='text'
          />
          <Field
            component={renderLocationInfoFields}
            name='phone'
            label='Phone'
            type='tel'
          />
          <Field
            component={renderLocationInfoFields}
            name='mobile'
            label='Mobile'
            type='text'
          />
          <Field
            component={renderLocationInfoFields}
            name='email'
            label='Email'
            type='email'
          />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "addCustomer",
})(AddJob);