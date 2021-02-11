import React from "react";
import { Field, reduxForm } from "redux-form";
import Styles from "./quantity-collector.module.scss";
import { useSelector } from "react-redux";
import CircledToggleButton from "../../../circled-toggle-button";

const isPositiveNumber = (value) => {
  console.log(value, "from value", "+ value", +value);
  if (+value >= 0) return value;
  return "";
};

const QuantityCollector = (props) => {
  const { quantityType } = useSelector(
    (state) => state.form.quantityCollector?.values
  );
  return (
    <div className={Styles.collector}>
      <div className={Styles.collector__quantity}>
        <label
          className={`${
            quantityType === "byQuantity"
              ? Styles.collector__radiobuttonActive
              : ""
          } ${Styles.collector__radiobutton} `}
        >
          <Field
            name='quantityType'
            component='input'
            type='radio'
            value='byQuantity'
          />{" "}
        </label>
        <div className={Styles.collector__inputWrapper}>
          <label
            htmlFor='quantityCollector'
            className={` ${
              quantityType === "byQuantity"
                ? Styles.collector__inputWrapper__labelActive
                : ""
            } ${Styles.collector__inputWrapper__label}`}
          >
            Quantity
          </label>
          <Field
            disabled={quantityType === "byHours" ? true : false}
            id='quantityCollector'
            name='quantity'
            component='input'
            type='number'
            min='0'
            normalize={isPositiveNumber}
            className={Styles.collector__input}
          />
        </div>
      </div>

      <div className={Styles.collector__hours}>
        <label
          className={`${
            quantityType === "byHours"
              ? Styles.collector__radiobuttonActive
              : ""
          } ${Styles.collector__radiobutton} `}
        >
          <Field
            name='quantityType'
            component='input'
            type='radio'
            value='byHours'
          />{" "}
        </label>
        <div className={Styles.collector__inputWrapper}>
          <label
            htmlFor='hoursCollector'
            className={` ${
              quantityType === "byHours"
                ? Styles.collector__inputWrapper__labelActive
                : ""
            } ${Styles.collector__inputWrapper__label}`}
          >
            Hrs
          </label>
          <Field
            disabled={quantityType === "byQuantity" ? true : false}
            id='hoursCollector'
            name='numberOfHours'
            component='input'
            type='number'
            normalize={isPositiveNumber}
            className={Styles.collector__input}
          />
        </div>
        <div className={Styles.collector__inputWrapper}>
          <label
            htmlFor='minutesCollector'
            className={` ${
              quantityType === "byHours"
                ? Styles.collector__inputWrapper__labelActive
                : ""
            } ${Styles.collector__inputWrapper__label}`}
          >
            Mins
          </label>
          <Field
            disabled={quantityType === "byQuantity" ? true : false}
            id='minutesCollector'
            name='numberOfMinutes'
            component='input'
            type='number'
            normalize={isPositiveNumber}
            className={Styles.collector__input}
          />
        </div>
      </div>
      <div className={Styles.collector__togglebutton}>
        <CircledToggleButton
          name='isBillable'
          id='notBillable'
          initialValues={{ isBillable: true }}
        />
        <label
          htmlFor='notBillable'
          className={Styles.collector__togglebutton__label}
        >
          Not Billable
        </label>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "quantityCollector",
  initialValues: {
    quantityType: "byQuantity",
    numberOfHours: 0,
    numberOfMinutes: 0,
  },
})(QuantityCollector);
