import React, { useState } from "react";
import Styles from "./addjob.module.scss";
import { reduxForm, Field } from "redux-form";
import StatusSelector from "../../../../../../shared/statusSelector";
import Priority from "../priority";
import WorkForceSelector from "./components/workforceselector";
import Dates from "./components/dates";
import CustomerSelector from "../../../../../../shared/customer-selector";

const renderLocationInfoFields = ({
  input,
  label,
  placeholder,
  className,
  type,
  meta: { touched, error },
  id,
}) => {
  return (
    <div className={Styles.addjob__form__locations__input}>
      <div className={Styles.addjob__form__locations__input__label}>
        <label htmlFor={id}>{label}</label>
      </div>
      <div
        className={`${Styles.addjob__form__locations__input__input} ${className}`}
      >
        <input {...input} type={type} placeholder={placeholder} id={id} />
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
  const [jobStatus, setJobStatus] = useState(null);

  return (
    <div className={Styles.addjob}>
      <CustomerSelector />

      <form className={Styles.addjob__form}>
        <Field
          component={renderField}
          name='jobName'
          placeholder='Enter job name'
        />
        <StatusSelector onStatusChange={(argument) => setJobStatus(argument)} />
        <Priority />
        <div
          className={`${Styles.addjob__form__jobDescription} ${Styles.addjob__form__section}`}
        >
          <div className={Styles.addjob__form__jobDescription__label}>
            Job Description
          </div>
          <Field name='jobDescription' component='textarea' />
        </div>
        <div
          className={`${Styles.addjob__form__addforms} ${Styles.addjob__form__section}`}
        >
          <span>Forms</span>
          <div className={Styles.addjob__form__addforms__center}>
            <div>select form(s) to add to the job</div>
            <div className={Styles.addjob__form__addforms__button}>
              <i className='fa fa-plus fa-lg'></i> Add Form
            </div>
          </div>
        </div>
        <div
          className={`${Styles.addjob__form__locations} ${Styles.addjob__form__section}`}
        >
          <span className={Styles.addjob__form__locations__heading}>
            Site address
          </span>
          <Field
            component={renderLocationInfoFields}
            name='address'
            type='text'
            label='Address'
            id='address'
          />
          <Field
            component={renderLocationInfoFields}
            name='address2'
            type='text'
            label=''
            id='address2'
          />
          <Field
            component={renderLocationInfoFields}
            name='city'
            type='text'
            label='City'
            id='city'
          />
          <Field
            component={renderLocationInfoFields}
            name='county'
            label='State/County'
            type='text'
            id='county'
          />
          <Field
            component={renderLocationInfoFields}
            name='postCode'
            label='Post/Zip Code'
            type='text'
            id='postCode'
            className={Styles.addjob__form__locations__input__inputHalf}
          />
        </div>
        <div
          className={`${Styles.addjob__form__maincontacts} ${Styles.addjob__form__section}`}
        >
          <div className={Styles.addjob__form__maincontacts__heading}>
            <input type='radio' checked readOnly /> Main contact
          </div>
          <Field
            component={renderLocationInfoFields}
            name='contact'
            label='Contact'
            type='text'
            id='contact'
          />
          <Field
            component={renderLocationInfoFields}
            name='contact2'
            label=''
            type='text'
            id='contact2'
          />
          <Field
            component={renderLocationInfoFields}
            name='phone'
            label='Phone'
            type='tel'
            id='phone'
          />
          <Field
            component={renderLocationInfoFields}
            name='mobile'
            label='Mobile'
            type='text'
            id='mobile'
          />
          <Field
            component={renderLocationInfoFields}
            name='email'
            label='Email'
            type='email'
            id='email'
          />
        </div>
        <div
          className={`${Styles.addjob__form__assets} ${Styles.addjob__form__section}`}
        >
          <div className={Styles.addjob__form__assets__heading}>
            Assets/Services
          </div>

          <div>
            <label className={Styles.addjob__form__assets__option}>
              <Field
                name='assets'
                component='input'
                type='radio'
                value='none'
              />{" "}
              None
            </label>
            <label className={Styles.addjob__form__assets__option}>
              <Field
                name='assets'
                component='input'
                type='radio'
                value='reactiveWork'
              />{" "}
              Reactive work for asset(s)
            </label>
            <label className={Styles.addjob__form__assets__option}>
              <Field
                name='assets'
                component='input'
                type='radio'
                value='serviceContract'
              />{" "}
              Service contract visit
            </label>
          </div>
        </div>
        <div
          className={`${Styles.addjob__form__assignedTo} ${Styles.addjob__form__section}`}
        >
          <div className={Styles.addjob__form__assignedTo__heading}>
            Assigned to
          </div>
          <div className={Styles.addjob__form__assignedTo__checks}>
            <label className={Styles.addjob__form__assets__option}>
              <Field
                name='isContractor'
                component='input'
                type='radio'
                value='internalWorkforce'
              />{" "}
              Internal workforce
            </label>
            <label className={Styles.addjob__form__assets__option}>
              <Field
                name='isContractor'
                component='input'
                type='radio'
                value='contractor'
              />{" "}
              Contractor
            </label>
          </div>
          {/* End the Checks div */}
          {/* Starting Work Selector  */}
          <WorkForceSelector />
        </div>
        <Dates />
        <button type='submit' className={Styles.addjob__form__submitbutton}>
          Save
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "addJob",
})(AddJob);
