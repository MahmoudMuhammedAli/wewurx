import React, { useState, useRef, useEffect } from "react";
import Styles from "./quote-status-selector.module.scss";

const StatusSelector = ({ onStatusChange }) => {
  const statusList = [
    { name: "draft", value: "draft" },
    { name: "Draft completed", value: "draft-completed" },
    { name: "Sent", value: "sent" },
    { name: "On hold", value: "onHold" },
    { name: "Rejected", value: "rejected" },
    { name: "Accepted", value: "accepted" },
  ];
  const [selectedStatus, setSelectedStatus] = useState(statusList[0]);
  const statusSelect = useRef(null);
  let [isStatusSelectOpen, setIsStatusSelectOpen] = useState(false);

  const openStatusSelect = () => {
    setIsStatusSelectOpen(true);
    statusSelect.current.classList.add(Styles.select__statusselectOpened);
    setTimeout(() => {
      statusSelect.current.style.cssText = "height:13rem;";
    }, 0);
    // after .3s i should remove the border and the padding
  };
  const closeStatusSelect = () => {
    setIsStatusSelectOpen(false);
    statusSelect.current.style.cssText = "height:0;";
    setTimeout(() => {
      statusSelect.current.classList.remove(Styles.select__statusselectOpened);
      statusSelect.current.classList.add(Styles.select__statusselectClosed);
    }, 200);
  };
  // ref for the selected item to attach an event listener on it
  const selectedRef = useRef(null);
  const handleSelectClick = () => {
    if (isStatusSelectOpen) {
      return closeStatusSelect();
    }
    openStatusSelect();
  };

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
            className={Styles.select__selected__rhombus}
            style={{ backgroundColor: `var(--quote-color-${item.value})` }}
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
        onClick={handleSelectClick}
      >
        <span
          className={Styles.select__selected__rhombus}
          style={{
            backgroundColor: `var(--quote-color-${selectedStatus.value})`,
          }}
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
