import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from "./invoice-status-selector.module.scss";
import { useSelector } from "react-redux";

const status = [
  { name: "Issued", value: "issued" },
  { name: "Sent", value: "sent" },
  { name: "Part-Paid", value: "partPaid" },
  { name: "Paid", value: "paid" },
  { name: "Overdue", value: "overdued" },
];

const renderSelector = ({ input }) => {
  return (
    <select className={Styles.selector__select} {...input}>
      {status.map(({ name, value }) => {
        return (
          <option key={value} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
const StatusSelector = (props) => {
  const { invoiceStatusSelector } = useSelector((state) => state.form);
  const { status } = invoiceStatusSelector.values;
  const initialStatus = invoiceStatusSelector.initial.status;
  console.log(status || initialStatus, "from the initial or state");
  return (
    <div className={Styles.selector}>
      <span
        className={Styles.selector__selectedColor}
        style={{
          backgroundColor: `var(--invoice-color-${status || initialStatus}`,
        }}
      ></span>{" "}
      <Field name='status' component={renderSelector} />
    </div>
  );
};

export default reduxForm({
  form: "invoiceStatusSelector",
  initialValues: { status: "issued" },
})(StatusSelector);
