import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./totalprice.module.scss";
import { calculateSMSPackagePrice, selectedPrice } from "../shared";
import { connect } from "react-redux";
const renderField = ({ input, meta: { touched, error } }) => {
  return (
    <div className={Styles.totalprice__codeinputwrapper}>
      <input {...input} type='text' className={Styles.totalprice__codeinput} />
      <span>?</span>
      {touched && (
        <p className={Styles.totalprice__codeinputwrapper__error}>
          Invalid coupon code. Please make sure you enter it properly or contact
          us if you have any problems.
        </p>
      )}
    </div>
  );
};

const TotalPrice = ({
  shouldIncludeSMS,
  SMSPackage,
  selectedPackage,
  numberOfUsers,
}) => {
  const packagePrice = calculateSMSPackagePrice(SMSPackage);
  const [shouldDisplayCodeInput, setShouldDisplayCodeInput] = useState(false);
  const SMSPackagePrice = shouldIncludeSMS
    ? packagePrice.toFixed(2)
    : (0).toFixed(2);
  const pricePerUser = selectedPrice(selectedPackage).value;
  const totalPricePerUsers = numberOfUsers * pricePerUser.toFixed(2);
  const totalPrice = +SMSPackagePrice + totalPricePerUsers;
  const VAT = (totalPrice / 100) * 20;
  return (
    <div className={Styles.totalprice}>
      <h6 className={Styles.totalprice__code}>
        Code{" "}
        <button
          className={Styles.totalprice__code__button}
          onClick={() => setShouldDisplayCodeInput((state) => !state)}
        >
          {shouldDisplayCodeInput ? (
            <fa className='fa fa-minus '></fa>
          ) : (
            <i className='fa fa-plus'></i>
          )}{" "}
        </button>
      </h6>
      {shouldDisplayCodeInput ? (
        <Field name='code' component={renderField} />
      ) : (
        ""
      )}
      <h4 className={Styles.totalprice__heading}>Total</h4>
      <div className={Styles.totalprice__prices}>
        <div className={Styles.totalprice__prices__details}>
          <div className={Styles.totalprice__prices__details__total}>
            <span className={Styles.totalprice__prices__details__total__label}>
              Total
            </span>
            <span className={Styles.totalprice__prices__details__total__price}>
              £{totalPrice.toFixed(2)}
            </span>
          </div>
          <div className={Styles.totalprice__prices__details__total}>
            <span className={Styles.totalprice__prices__details__total__label}>
              VAT
            </span>
            <span className={Styles.totalprice__prices__details__total__price}>
              £{VAT.toFixed(2)}
            </span>
          </div>
        </div>
        <div className={Styles.totalprice__prices__total}>
          <div className={Styles.totalprice__prices__details__total}>
            <span className={Styles.totalprice__prices__details__total__label}>
              Total incl. VAT{" "}
            </span>
            <span className={Styles.totalprice__prices__details__total__price}>
              £{(totalPrice + VAT).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shouldIncludeSMS: state.form.addONs?.values?.shouldIncludeSMS,
    SMSPackage: state.form.addONs?.values?.SMSPackage,
    selectedPackage: state.form.package?.values.packageValue,
    numberOfUsers: state.subscriptions.numberOfUsers,
  };
};

export default connect(mapStateToProps)(
  reduxForm({ form: "subscriptionTotalPrice" })(TotalPrice)
);
