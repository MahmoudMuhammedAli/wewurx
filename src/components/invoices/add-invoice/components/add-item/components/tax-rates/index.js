import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./tax-rates.module.scss";

const renderSelect = (options) => ({ input }) => {
  return (
    <select
      {...input}
      className={Styles.taxes__select}
      className={Styles.taxes__select}
    >
      {options.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

const TaxRates = () => {
  const accountCodesOptions = [];
  const taxRatesOptions = [
    { name: "Sales no Tax", value: 0 },
    { name: "Sales with Tax (20%)", value: 20 },
  ];
  return (
    <div className={Styles.taxes}>
      <div className={Styles.taxes__taxrate}>
        <h3 className={Styles.taxes__taxrate__heading}>Tax Rates</h3>
        <Field component={renderSelect(taxRatesOptions)} name='taxRate' />
      </div>
      <div className={Styles.taxes__accountcode}>
        <h3 className={Styles.taxes__accountcode__heading}>Account Code</h3>
        <Field
          component={renderSelect(accountCodesOptions)}
          name='accountCode'
        />
      </div>
    </div>
  );
};

export default reduxForm({
  form: "costItemTaxes",
  initialValues: { taxRate: 0 },
})(TaxRates);
