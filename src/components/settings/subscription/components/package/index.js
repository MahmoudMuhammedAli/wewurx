import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./package.module.scss";
import { connect } from "react-redux";
import { selectedPrice } from "../shared";

const packageOptions = [
  { name: "BASE", value: "base" },
  { name: "BASE-Annual(10%OFF)", value: "baseAnnual10%Off" },
  { name: "PREMIUM", value: "premium" },
  { name: "PREMIUM-Annual(13%OFF)", value: "premiumAnnual13%Off" },
  { name: "ULTIMATE", value: "ultimate" },
  { name: "ULTIMATE-Annual(15%OFF)", value: "ultimateAnnual15%Off" },
];

const renderPackageOptions = ({ input }) => {
  return (
    <select {...input} className={Styles.package__package__selector__select}>
      {packageOptions.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const Package = ({ selectedPackage = "ultimate" }) => {
  const selectedPricePerUser = selectedPrice(selectedPackage);

  return (
    <div className={Styles.package}>
      <h4 className={Styles.package__heading}>Package</h4>

      <div className={Styles.package__package}>
        <div className={Styles.package__package__selector}>
          <Field name='packageValue' component={renderPackageOptions} />
          <span className={Styles.package__package__selector__price}>
            £{selectedPricePerUser.value.toFixed(2)}/user
          </span>
        </div>
        <div className={Styles.package__package__selector__currencybox}>
          <h5
            className={Styles.package__package__selector__currencybox__heading}
          >
            Currency
          </h5>
          <div className={Styles.package__package__selector__currencybox__box}>
            GBP
          </div>
        </div>
      </div>
      <a href='#' className={Styles.package__link}>
        Head to our pricing page
      </a>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { selectedPackage: state.form.package?.values.packageValue };
};
export default connect(mapStateToProps)(
  reduxForm({ form: "package" })(Package)
);
