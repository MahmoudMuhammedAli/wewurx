import React, { useState } from "react";
import Styles from "./job-item.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Field } from "redux-form";

const isEmail = (string) => {
  let regExp = /@[a-z_]+\.[a-z_]/i;
  return regExp.test(string);
};

const JobItem = ({
  jobName,
  status,
  amount,
  customer,
  site,
  assignedTo,
  scheduled,
  dueDate,
  jobID,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(status);
  return (
    <div className={Styles.job}>
      <Field
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked((checked) => !checked)}
        className={Styles.job__checkbox}
        component='input'
        name='isChecked'
      />
      <div className={`${Styles.job__job}`}>
        <div className={Styles.job__job__names}>
          {/* display each word in a separate line */}
          {jobName
            .split(" ")

            .map((word, index) => (
              <p className={Styles.job__job__name} key={index}>
                {word.length > 7 ? word.substr(0, 6) + "..." : word}
              </p>
            ))}
        </div>
        <p className={Styles.job__job__id}>{jobID}</p>
      </div>
      <div
        className={Styles.job__status}
        style={status ? { backgroundColor: `var(--color-${status})` } : {}}
      ></div>
      <div className={Styles.job__invoice}></div>
      <div className={Styles.job__amount}>£{amount}</div>
      <div className={Styles.job__customer}>
        {customer.map((name, index) => (
          <div
            key={index}
            className={isEmail(name) ? Styles.job__customer__red : ""}
          >
            {name}
          </div>
        ))}
      </div>
      <div className={Styles.job__site}>{site}</div>
      <div className={Styles.job__due}>{dueDate}</div>
      <div className={Styles.job__schedule}>{scheduled}</div>
      <div className={Styles.job__assign}>
        {/* display each word in a separate line */}
        {assignedTo
          .split(" ")

          .map((word, index) => (
            <p key={index}>
              {word.length > 14 ? word.substr(0, 14) + "..." : word}
            </p>
          ))}
      </div>

      <Link to='/system/jobs/view/230238982' className={Styles.job__button}>
        View
      </Link>
    </div>
  );
};

JobItem.propTypes = {
  jobName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  job: PropTypes.arrayOf(PropTypes.string).isRequired,
  site: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  scheduled: PropTypes.string.isRequired,
  assignedTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

JobItem.defaultProps = {
  jobName: "Job Name",
  status: "pending",
  amount: "0.00",
  job: ["job name", "SomeExample@example.com", "0238969710", "01102076772"],
  site: "ER Rahawie Giza Egypt",
  dueDate: "21/11/2020",
  scheduled: "20/10/2021",
  assignedTo: "Not Allocated",
};
export default JobItem;
