import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { calculateSMSPackagePrice } from "../shared";
import Styles from "./addons.module.scss";

const SMSPackages = [
  { name: "Up to 100 sms/month (£5)", value: 100 },
  { name: "Up to 250 sms/month (£13)", value: 250 },
  { name: "Up to 500 sms/month (£25)", value: 500 },
  { name: "Up to 1000 sms/month (£50)", value: 1000 },
  { name: "Up to 2500 sms/month (£125)", value: 2500 },
  { name: "Up to 5000 sms/month (£250)", value: 5000 },
  { name: "Up to 10000 sms/month (£500)", value: 10000 },
];
const renderSMSPackages = ({ input }) => {
  return (
    <select className={Styles.addons__select} {...input}>
      {SMSPackages.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const AddONs = ({ shouldIncludeSMS, SMSPackage }) => {
  const packagePrice = calculateSMSPackagePrice(SMSPackage);
  return (
    <div className={Styles.addons}>
      <h4 className={Styles.addons__heading}>Add-ons</h4>
      <div className={Styles.addons__SMSMessaging}>
        <label>
          <Field name='shouldIncludeSMS' component='input' type='checkbox' />{" "}
          SMS Messaging
        </label>
      </div>
      <div className={Styles.addons__selectorwrapper}>
        {shouldIncludeSMS ? (
          <Field name='SMSPackage' component={renderSMSPackages} />
        ) : (
          <select className={Styles.addons__select} disabled>
            <option>Up to 100 sms/month (£5)</option>
          </select>
        )}
        <span className={Styles.addons__price}>
          £{shouldIncludeSMS ? packagePrice.toFixed(2) : (0).toFixed(2)}
        </span>
      </div>
      <div className={Styles.addons__availablemessages}>
        You have no messages available
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shouldIncludeSMS: state.form.addONs?.values?.shouldIncludeSMS,
    SMSPackage: state.form.addONs?.values?.SMSPackage,
  };
};

export default connect(
  mapStateToProps,
  {}
)(reduxForm({ form: "addONs", initialValues: { SMSPackage: 100 } })(AddONs));
