import React, { useState } from "react";
import Styles from "./customer.module.scss";
import PropTypes from "prop-types";

const Customer = ({
  jobName,
  status,
  amount,
  customer,
  site,
  assignedTo,
  scheduled,
  dueDate,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(status);
  return (
    <div className={Styles.customer}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((checked) => !checked)}
        className={Styles.customer__checkbox}
      />
      <div
        className={`${Styles.customer__job} ${Styles[`customer__${status}`]}`}
      >
        {jobName}
      </div>
      <div className={Styles.customer__invoice}></div>
      <div className={Styles.customer__amount}>£{amount}</div>
      <div className={Styles.customer__customer}>
        {customer.map(({ name, value }) => {
          if (name === "email") {
            return (
              <div className={Styles.customer__customer__red}>{value}</div>
            );
          }
          return <div>{value}</div>;
        })}
      </div>
      <div className={Styles.customer__site}>{site}</div>
      <div className={Styles.customer__due}>{dueDate}</div>
      <div className={Styles.customer__schedule}>{scheduled}</div>
      <div className={Styles.customer__assign}>{assignedTo}</div>
      <button className={Styles.customer__button}>View</button>
    </div>
  );
};

Customer.propTypes = {
  jobName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  customer: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  site: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  scheduled: PropTypes.string.isRequired,
  assignedTo: PropTypes.string.isRequired,
};

Customer.defaultProps = {
  jobName: "Job Name",
  status: "pending",
  amount: "0.00",
  customer: [
    { name: "name", value: "customer name" },
    { name: "email", value: "example@example.com" },
    { name: "phone", value: "0238969710" },
    { name: "mobile", value: "01102076772" },
  ],
  site: "ER Rahawie Giza Egypt",
  dueDate: "21/11/2020",
  scheduled: "20/10/2021",
  assignedTo: "Not Allocated",
};

export default Customer;
