import React, { useEffect, useState } from "react";
import Styles from "./weekdayselector.module.scss";

const weekdays = [
  { name: "Mon", value: 1 },
  { name: "Tue", value: 2 },
  { name: "Wed", value: 3 },
  { name: "thu", value: 4 },
  { name: "Fri", value: 5 },
  { name: "Sun", value: 6 },
  { name: "Sun", value: 0 },
];

const WeekDaySelector = ({ onDaySelect }) => {
  const [checkedDays, setCheckedDays] = useState([{ name: "Mon", value: 1 }]);
  useEffect(() => {
    onDaySelect(checkedDays);
  }, []);

  const handleDaySelect = (name, value, nextCheckBoxStatus) => {
    // check and see if there is any days selected or not
    // if there is no days selected then set the selected days to the mon
    if (nextCheckBoxStatus === false && checkedDays.length === 1) {
      const updatedCheckedDays = [{ name: "Mon", value: 1 }];
      setCheckedDays(updatedCheckedDays);
      return onDaySelect(updatedCheckedDays);
    }
    if (nextCheckBoxStatus === true) {
      // push this item to the checkedDays
      return setCheckedDays((prevChecked) => {
        const updatedCheckedDays = [...prevChecked, { name, value }];
        onDaySelect(updatedCheckedDays);
        return updatedCheckedDays;
      });
    }
    // else then you want to remove it from the selectedDays
    const filteredSelectedDays = checkedDays.filter(
      (day) => day.value !== value
    );
    setCheckedDays(filteredSelectedDays);
    onDaySelect(filteredSelectedDays);
  };
  return (
    <div className={Styles.weekdayselector}>
      {weekdays.map(({ name, value }) => {
        let isNameExistsInTheSelectedArrays = false;
        for (let item of checkedDays) {
          if (item.value === value) {
            isNameExistsInTheSelectedArrays = true;
          }
        }
        return (
          <label key={value}>
            {name}
            <input
              type='checkbox'
              checked={isNameExistsInTheSelectedArrays}
              onChange={(e) => handleDaySelect(name, value, e.target.checked)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default WeekDaySelector;
