import React, { useEffect, useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./companyinformation.module.scss";

const renderInput = ({
  input,
  type,
  label = "",
  placeholder = "",
  placeholderAfterVisited,
  className,
  meta: { touched, error, visited },
}) => {
  return (
    <div className={Styles.companyinformation__inputcontainer}>
      <label>
        <span className={Styles.companyinformation__inputcontainer__label}>
          {label}
        </span>
        {placeholderAfterVisited ? (
          visited || touched ? (
            <input
              type={type}
              {...input}
              placeholder={placeholder}
              className={`${Styles.companyinformation__inputcontainer__input} ${className}`}
            />
          ) : (
            <input
              type={type}
              {...input}
              className={`${Styles.companyinformation__inputcontainer__input} ${className}`}
            />
          )
        ) : (
          <input
            type={type}
            {...input}
            placeholder={placeholder}
            className={`${Styles.companyinformation__inputcontainer__input} ${className}`}
          />
        )}

        {touched && error && <span>{error}</span>}
      </label>
    </div>
  );
};

const closestIndustries = [
  { name: "Cleaning Service", value: "cleaningService" },
  { name: "Gardening & Landscaping", value: "gardening&landScaping" },
  { name: "IT & Technology", value: "IT&Technology" },
  { name: "Electrical Contractors", value: "electricalContractors" },
  { name: "Plumbing & Heating", value: "plumbing&Heating" },
  { name: "HVAC", value: "HVAC" },
  {
    name: "Property & Facilities Management",
    value: "Property&FacilityesManagement",
  },
  { name: "Building & Contruction", value: "building&Construction" },
  { name: "Handyman", value: "handyman" },
  { name: "Appliance Repairs", value: "applianceRepairs" },
  { name: "Locksmith", value: "locksmith" },
  { name: "Flooring", value: "flooring" },
  { name: "Holiday Lettings", value: "holidayLettings" },
  { name: "Other", value: "other" },
];

const renderClosestIndustries = ({ input }) => {
  return (
    <div className={Styles.companyinformation__inputcontainer}>
      <label>
        <span className={Styles.companyinformation__inputcontainer__label}>
          Closest Industry
        </span>

        <select
          {...input}
          className={`${Styles.companyinformation__inputcontainer__input} `}
        >
          {closestIndustries.map(({ name, value }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

const CompanyInformation = (props) => {
  const [isInqueryBoxOpened, setIsInqueryBoxOpened] = useState(false);
  const [shouldInquerBoxRemoved, setShouldInqueryBoxRemoved] = useState(false);
  const inqueryRef = useRef(null);
  useEffect(() => {
    const closeInqueryBox = () => {
      setIsInqueryBoxOpened(false);
    };
    const openInqueryBox = () => {
      setIsInqueryBoxOpened(true);
    };
    const toggleInqueryBox = () => {
      if (isInqueryBoxOpened) {
        return closeInqueryBox();
      }
      openInqueryBox();
    };
    inqueryRef.current.addEventListener("click", toggleInqueryBox);

    return () => {
      if (inqueryRef.current) {
        inqueryRef.current.removeEventListener("click", toggleInqueryBox);
      }
    };
  }, [isInqueryBoxOpened]);

  return (
    <div className={Styles.companyinformation}>
      <div className={Styles.companyinformation__inputcontainer}>
        <h4
          className={`${Styles.companyinformation__inputcontainer__label} ${Styles.companyinformation__inputcontainer__labelHeader}`}
        >
          Company Address
        </h4>
      </div>
      <Field
        name='companyName'
        component={renderInput}
        type='text'
        label='Company Name'
      />
      <Field
        component={renderInput}
        name='address'
        placeholder='Enter a location'
        type='text'
        placeholderAfterVisited
        label='Address'
      />
      <Field component={renderInput} name='address2' label='' type='text' />
      <Field component={renderInput} name='city' label='City' type='text' />
      <Field
        component={renderInput}
        name='country'
        label='State/Country'
        type='text'
      />
      <Field
        component={renderInput}
        name='zipCode'
        label='Post/Zip Code'
        type='text'
      />
      <Field
        component={renderInput}
        name='phone'
        label='Phone Number'
        type='tel'
      />
      <Field component={renderInput} name='email' label='Email' type='email' />
      <Field
        component={renderInput}
        name='website'
        label='Website'
        type='url'
      />
      <Field component={renderClosestIndustries} name='closestIndustry' />
      <Field
        component={renderInput}
        name='companyNumber'
        label='Company Number'
        type='text'
      />
      <div className={Styles.companyinformation__inputcontainer}>
        <span className={Styles.companyinformation__inputcontainer__label}>
          Company tax number
        </span>
        <Field
          component='input'
          type='text'
          name='taxType'
          className={`${Styles.companyinformation__inputcontainer__input} ${Styles.companyinformation__inputcontainer__inputQuarter}`}
        />
        <Field
          type='text'
          name='taxNumber'
          component='input'
          className={`${Styles.companyinformation__inputcontainer__input} ${Styles.companyinformation__inputcontainer__inputThird}`}
        />
      </div>
      <div className={Styles.companyinformation__lastinputContainer}>
        <Field
          component={renderInput}
          name='referencePrefix'
          label='Reference Prefix'
          className={` ${Styles.companyinformation__inputcontainer__inputHalf}`}
        />
        <div
          className={
            Styles.companyinformation__lastinputContainer__inquieryContainer
          }
        >
          <span ref={inqueryRef}>?</span>
          <div
            className={
              Styles.companyinformation__lastinputContainer__inquieryContainer__box
            }
            style={{ display: isInqueryBoxOpened ? "block" : "none" }}
          >
            <div
              className={
                Styles.companyinformation__lastinputContainer__inquieryContainer__box__triangle
              }
            ></div>
            <h3
              className={
                Styles.companyinformation__lastinputContainer__inquieryContainer__box__heading
              }
            >
              REFERENCE PREFIX
            </h3>
            <p>
              You can use this to add a unique reference to your quotes, jobs
              and invoices. As an example if your company is called Smiths
              Property Maintenance you may want to add SPM to the beginning of
              your references
            </p>
            <button
              className={
                Styles.companyinformation__lastinputContainer__inquieryContainer__box__button
              }
            >
              {" "}
              <i className='fa fa-ban '></i> Hide these tips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({ form: "companyInfo" })(CompanyInformation);
