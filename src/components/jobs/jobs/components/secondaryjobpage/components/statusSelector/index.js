import React, { useState, useRef, useEffect } from "react";
import Styles from "./statusSelector.module.scss";

const StatusSelector = (props) => {
  console.log("rerendered");
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
  let isStatusSelectOpen = false;

  const openStatusSelect = () => {
    isStatusSelectOpen = true;
    statusSelect.current.style.cssText =
      "height:17rem; border:1px solid var(--border-color-gray); padding: 0.2rem";
    // after .3s i should remove the border and the padding
  };
  const closeStatusSelect = () => {
    isStatusSelectOpen = false;
    statusSelect.current.style.cssText = "height:0; border:0; padding: 0";
  };
  // ref for the selected item to attach an event listener on it
  const selectedRef = useRef(null);
  const toggleSelectListStatus = () => {};

  useEffect(() => {
    selectedRef.current.addEventListener("click", () => {
      if (isStatusSelectOpen) {
        return closeStatusSelect();
      }
      openStatusSelect();
    });
  }, []);

  const handleItemSelect = (item) => {
    setSelectedStatus(item);
    props.setStatus(item);
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
      <div className={Styles.select__selected} ref={selectedRef}>
        <span
          className={Styles.select__selected__circle}
          style={{ backgroundColor: `var(--color-${selectedStatus.value})` }}
        ></span>
        <span className={Styles.select__selected__text}>
          {selectedStatus.name}
        </span>

        <i
          className={`fa fa-arrow-down fa-lg ${Styles.select__selected__icon}`}
        ></i>
      </div>
      <div ref={statusSelect} className={Styles.select__statusselect}>
        {renderStatusList()}
      </div>
    </div>
  );
};

export default StatusSelector;
