import { date } from "faker";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  printHourInHHMMFormat,
  getMonthName,
  getDayName,
} from "../../../../../../../../../helpers";
import WeekDaySelector from "../weekdayselector";

import Styles from "./recurrenceSettings.module.scss";

const endRecurrenceOptions = [
  { name: "Never", value: "never" },
  { name: "After", value: "after" },
  { name: "On date", value: "onDate" },
];

const endRecurrenceSelector = ({ input }) => {
  return (
    <div className={Styles.options__endrecurrencebox}>
      <span>End recurrence</span>
      <select {...input} className={Styles.options__endrecurrencebox__select}>
        {endRecurrenceOptions.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const renderDurationPhrase = (startDate, endDate) => {
  const startDayName = getDayName(startDate);
  const endDayName = getDayName(endDate);

  const startDayOfTheMonth = startDate.getDate();
  const endDayOfTheMonth = endDate.getDate();

  const startMonthName = getMonthName(startDate);
  const endMonthName = getMonthName(endDate);

  const startYearNumber = startDate.getFullYear();
  const endYearNumber = endDate.getFullYear();

  return (
    <div>
      Starting {startDayName} {startDayOfTheMonth}th of {startMonthName}{" "}
      {startYearNumber} - {endDayName} {endDayOfTheMonth}th of {endMonthName}{" "}
      {endYearNumber}
    </div>
  );
};

const customSetUpSelections = [
  { name: "Daily", value: "daily" },
  { name: "Weekly", value: "weekly" },
  { name: "Monthly", value: "monthly" },
  { name: "Yearly", value: "yearly" },
];
const renderCustomSetupSelector = ({ input }) => {
  return (
    <div>
      <select {...input} className={Styles.options__customsetup__select}>
        {customSetUpSelections.map(({ name, value }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
const renderWeekDaysSelector = (onDaySelect) => {
  return (
    <div>
      <WeekDaySelector onDaySelect={onDaySelect} />
    </div>
  );
};

const renderEveryMonthOptions = () => {
  return <div> Every Month Options</div>;
};

const renderEveryYearsOptions = () => {
  return <div>Every Year Options</div>;
};
const renderUnderEveryBlock = (customSetUpSelection, onDaySelect) => {
  switch (customSetUpSelection) {
    case "weekly":
      return <> {renderWeekDaysSelector(onDaySelect)} </>;
    case "monthly":
      return <> {renderEveryMonthOptions()}</>;
    case "yearly":
      return <>{renderEveryYearsOptions()} </>;
    default:
      return <></>;
  }
};

const renderCustomSetup = (customSetUpSelection, onDaySelect) => {
  return (
    <div className={Styles.options__customsetup}>
      <Field
        name='customSetupSelection'
        component={renderCustomSetupSelector}
      />

      <label>
        Every{" "}
        <Field
          name='customEveryValue'
          component='input'
          type='number'
          className={Styles.options__customsetup__everyInput}
        />{" "}
        {customSetUpSelection === "daily"
          ? "day(s)"
          : customSetUpSelection === "monthly"
          ? customSetUpSelection.substring(0, 5) + "(s) on"
          : customSetUpSelection.substring(0, 4) + "(s) on"}
      </label>
      {renderUnderEveryBlock(customSetUpSelection, onDaySelect)}
    </div>
  );
};

const renderSetUpStatus = (status, startDate, endDate) => {
  switch (status) {
    case "everyDay":
      return (
        <div>
          Every {getDayName(startDate)}, at {printHourInHHMMFormat(startDate)}-
          {printHourInHHMMFormat(endDate)}
        </div>
      );
    case "everyWeek":
      return (
        <div>
          Every {getDayName(startDate)},at {printHourInHHMMFormat(startDate)}-
          {printHourInHHMMFormat(endDate)}
        </div>
      );
    case "everyMonth":
      return (
        <div>
          Every {startDate.getDate()}th of the month,at{" "}
          {printHourInHHMMFormat(startDate)}-{printHourInHHMMFormat(endDate)}
        </div>
      );
    case "everyYear":
      return (
        <div>
          Every year, at the {startDate.getDate()}th day of{" "}
          {getMonthName(startDate)} {printHourInHHMMFormat(startDate)}-
          {printHourInHHMMFormat(endDate)}
        </div>
      );
    case "custom":
      return <> Custom </>;
  }
};

const RecurrenceSettings = ({
  recurrenceValue,
  startDate,
  endDate,
  customSetupSelection = "daily",
}) => {
  const onDaySelect = (daysSelected) => {
    console.log(daysSelected, "frm selected Days");
  };
  if (recurrenceValue && recurrenceValue !== "None") {
    return (
      <div className={Styles.options}>
        {/* handling the case where custom is selected and show the options available */}
        <div>
          {recurrenceValue === "custom"
            ? renderCustomSetup(customSetupSelection, onDaySelect)
            : ""}
        </div>
        <Field name='endRecurrenceOptions' component={endRecurrenceSelector} />

        <div className={Styles.options__currentsetup}>
          <span>Current setup</span>
          <div className={Styles.options__currentsetup__setup}>
            <i className='fa fa-repeat fa-sm'></i>
            <div>
              <div>
                {renderSetUpStatus(recurrenceValue, startDate, endDate)}
              </div>
              {renderDurationPhrase(startDate, endDate)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  const { addJobForm } = state;

  return {
    startDate: addJobForm.jobStartDate,
    endDate: addJobForm.jobEndDate,
    customSetupSelection: state.form.addJob?.values?.customSetupSelection,
  };
};

export default connect(mapStateToProps)(RecurrenceSettings);
