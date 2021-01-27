import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./basicinfo.module.scss";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { addStaffMemberStartDate } from "../../../../../../../../../actions";
import PasswordModal from "../passwordspecificationmodal";
import CannotRememberModal from "../cannotremembermodal";

const renderField = ({
  input,
  type,
  placeholderAfterTouched,
  label,
  id,
  placeholder,
  labelClassName,
  inputClassName,
  meta: { touched, error, visited },
}) => {
  return (
    <div className={Styles.basicinfo__inputcontainer}>
      <label
        htmlFor={id}
        className={`${labelClassName} ${Styles.basicinfo__inputcontainer__label}`}
      >
        {label}
      </label>
      {placeholderAfterTouched ? (
        visited ? (
          <input
            type={type}
            {...input}
            placeholder={placeholder}
            id={id}
            className={` ${inputClassName} ${Styles.basicinfo__inputcontainer__input}`}
          />
        ) : (
          <input
            type={type}
            {...input}
            id={id}
            className={` ${inputClassName} ${Styles.basicinfo__inputcontainer__input}`}
          />
        )
      ) : (
        <input
          type={type}
          {...input}
          id={id}
          className={` ${inputClassName} ${Styles.basicinfo__inputcontainer__input}`}
        />
      )}

      {touched && error && <span>{error}</span>}
    </div>
  );
};

class ExampleCustomInput extends React.Component {
  render() {
    return (
      <button
        className={Styles.basicinfo__inputcontainer__input}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

const BasicInfo = ({ startDate, addStaffMemberStartDate }) => {
  const [isSpecificationModalOPened, setIsSpecificationModalOPened] = useState(
    false
  );
  const [
    isCannotRememberModalOpened,
    setIsCannotRememberModalOpened,
  ] = useState(false);
  return (
    <div className={Styles.basicinfo}>
      <Field
        name='firstName'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoFirstName'
        label='First name'
        labelClassName={Styles.basicinfo__inputcontainer__labelBold}
        inputClassName={Styles.basicinfo__inputcontainer__inputQuarter}
      />
      <Field
        name='lastName'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoLastName'
        label='Last name'
        labelClassName={Styles.basicinfo__inputcontainer__labelBold}
        inputClassName={Styles.basicinfo__inputcontainer__inputQuarter}
      />
      <Field
        name='mobile'
        component={renderField}
        type='tel'
        id='staffMemberBasicInfoMobile'
        label='Mobile'
        inputClassName={Styles.basicinfo__inputcontainer__inputQuarter}
      />
      <Field
        name='email'
        component={renderField}
        type='email'
        id='staffMemberBasicInfoEmail'
        label='Email'
        labelClassName={Styles.basicinfo__inputcontainer__labelBold}
        inputClassName={Styles.basicinfo__inputcontainer__inputQuarter}
      />
      <div className={Styles.basicinfo__dateofbirth}>
        <label className={Styles.basicinfo__inputcontainer__label}>
          Date of birth
        </label>
        <Field
          name='day'
          placeholder='DD'
          component='input'
          type='number'
          className={Styles.basicinfo__dateofbirth__input}
        />
        <Field
          name='month'
          placeholder='MM'
          component='input'
          type='number'
          className={Styles.basicinfo__dateofbirth__input}
        />
        <Field
          name='year'
          placeholder='YYYY'
          component='input'
          type='number'
          className={Styles.basicinfo__dateofbirth__input}
        />
      </div>
      <Field
        name='address'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoAddress'
        label='Address'
        placeholderAfterTouched
        placeholder='Enter a location'
      />
      <Field
        name='address2'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoAddress2'
        label=' '
      />
      <Field
        name='city'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoCity'
        label='City'
      />
      <Field
        name='county'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoCountry'
        label='State/County'
      />
      <Field
        name='zipCode'
        component={renderField}
        type='text'
        id='staffMemberBasicInfoZipCode'
        label='Post/Zip code'
        inputClassName={Styles.basicinfo__inputcontainer__inputHalf}
      />
      <div className={Styles.basicinfo__starteddate}>
        <span className={Styles.basicinfo__inputcontainer__label}>
          Started on{" "}
        </span>
        <DatePicker
          selected={startDate}
          onChange={(date) => addStaffMemberStartDate(date)}
          customInput={<ExampleCustomInput />}
          className={Styles.basicinfo__starteddate__datepicker}
        />
      </div>
      <div className={Styles.basicinfo__passwordpolicybuttonContainer}>
        <Field
          name='oldPassword'
          component={renderField}
          type='password'
          id='staffMemberBasicInfoOldPassword'
          label='Old password'
          labelClassName={Styles.basicinfo__inputcontainer__labelBold}
        />
        <button
          onClick={() => setIsCannotRememberModalOpened(true)}
          className={Styles.basicinfo__passwordpolicybutton}
        >
          Can't remember?
        </button>
        <CannotRememberModal
          isCannotRememberModalOpened={isCannotRememberModalOpened}
          setIsCannotRememberModalOpened={setIsCannotRememberModalOpened}
        />
      </div>
      <div className={Styles.basicinfo__passwordpolicybuttonContainer}>
        <Field
          name='password'
          component={renderField}
          type='password'
          id='staffMemberBasicInfoPassword'
          label='Password'
          labelClassName={Styles.basicinfo__inputcontainer__labelBold}
        />
        <button
          onClick={() => setIsSpecificationModalOPened(true)}
          className={Styles.basicinfo__passwordpolicybutton}
        >
          Password policy
        </button>
      </div>

      <Field
        name='reEnterPassword'
        component={renderField}
        type='password'
        id='staffMemberBasicInfoReEnterPassword'
        label='Re-enter password'
        labelClassName={Styles.basicinfo__inputcontainer__labelBold}
      />
      <PasswordModal
        isSpecificationModalOPened={isSpecificationModalOPened}
        setIsSpecificationModalOPened={setIsSpecificationModalOPened}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    startDate: state.addStaffMember.startDate,
  };
};
export default connect(mapStateToProps, { addStaffMemberStartDate })(
  reduxForm({ form: "staffviewBasicInfo" })(BasicInfo)
);
