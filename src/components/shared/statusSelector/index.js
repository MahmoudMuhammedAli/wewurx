import React, { useState, useRef, useEffect } from "react";
import Styles from "./statusSelector.module.scss";

const StatusSelector = ({ onStatusChange, width }) => {
  const statusList = [
    { name: "Pending", value: "pending" },
    { name: "Scheduled", value: "scheduled" },
    { name: "Travelling", value: "travelling" },
    { name: "In progress", value: "inProgress" },
    { name: "Completed", value: "completed" },
    { name: "On hold", value: "onHold" },
    { name: "Attention", value: "attention" },
    { name: "Cancelled", value: "cancelled" },
    { name: "External", value: "external" },
  ];
  const [selectedStatus, setSelectedStatus] = useState(statusList[0]);
  const statusSelect = useRef(null);
  let [isStatusSelectOpen, setIsStatusSelectOpen] = useState(false);

  const openStatusSelect = () => {
    setIsStatusSelectOpen(true);
    statusSelect.current.style.transform = "scale(1)";
    setTimeout(() => {
      statusSelect.current.style.height = "16rem";
    }, 0);
    // after .3s i should remove the border and the padding
  };
  const closeStatusSelect = () => {
    setIsStatusSelectOpen(false);
    statusSelect.current.style.height = "0";
    setTimeout(() => {
      statusSelect.current.style.transform = "scale(0)";
    }, 250);
  };
  // ref for the selected item to attach an event listener on it
  const selectedRef = useRef(null);
  const toggleSelectListStatus = () => {};
  const listenToSelectClick = () => {
    if (isStatusSelectOpen) {
      return closeStatusSelect();
    }
    openStatusSelect();
  };

  useEffect(() => {
    selectedRef.current.addEventListener("click", listenToSelectClick);

    return () => {
      if (selectedRef.current) {
        selectedRef.current.removeEventListener("click", listenToSelectClick);
      }
    };
  });

  const handleItemSelect = (item) => {
    setSelectedStatus(item);
    onStatusChange(item);
    closeStatusSelect();
  };

  const renderStatusList = () => {
    return statusList.map((item) => {
      return (
        <div
          className={Styles.select__statusselect__item}
          key={item.value}
          onClick={() => {
            handleItemSelect(item);
          }}
        >
          <span
            className={Styles.select__selected__circle}
            style={{ backgroundColor: `var(--color-${item.value})` }}
          ></span>
          <span className={Styles.select__selected__text}>{item.name}</span>
        </div>
      );
    });
  };
  return (
    <div className={Styles.select}>
      {/*  for render the selected status*/}
      <div
        className={Styles.select__selected}
        ref={selectedRef}
        style={width ? { width } : {}}
      >
        <div>
          <span
            className={Styles.select__selected__circle}
            style={{ backgroundColor: `var(--color-${selectedStatus.value})` }}
          ></span>
          <span className={Styles.select__selected__text}>
            {selectedStatus.name}
          </span>
        </div>

        <i
          className={`fa fa-arrow-circle-down fa-lg ${Styles.select__selected__icon}`}
        ></i>
      </div>
      <div
        ref={statusSelect}
        className={Styles.select__statusselect}
        style={width ? { width } : {}}
      >
        {renderStatusList()}
      </div>
    </div>
  );
};

export default StatusSelector;
