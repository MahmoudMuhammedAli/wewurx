import React, { useEffect, useRef, useState } from "react";
import Styles from "./priority.module.scss";

const Priority = (props) => {
  const priorityList = [
    { name: "Normal", weight: "normal" },
    { name: "Low", weight: "low" },
    { name: "Urgent", weight: "urgent" },
  ];
  const [selectedPriority, setSelectdPriority] = useState(priorityList[0]);
  const handleSelectPriority = (item) => {
    setSelectdPriority(item);
    closePriorityList();
  };
  const renderPriorityList = () => {
    return priorityList.map((item) => {
      return (
        <div
          onClick={() => handleSelectPriority(item)}
          className={Styles.priority__list__item}
          key={item.weight}
        >
          {item.name}
        </div>
      );
    });
  };
  const prioritySelectorRef = useRef(null);
  const priorityListRef = useRef(null);
  let isPriorityListOpened = false;

  const openPriorityList = () => {
    isPriorityListOpened = true;
    priorityListRef.current.style.cssText =
      "height:5.5rem; border: 1px solid var(--border-color-gray)";
  };
  const closePriorityList = () => {
    isPriorityListOpened = false;
    priorityListRef.current.style.cssText = "height:0; border-width:0; ";
  };

  useEffect(() => {
    prioritySelectorRef.current.addEventListener("click", () => {
      if (isPriorityListOpened) return closePriorityList();
      openPriorityList();
    });
  }, []);

  return (
    <div className={Styles.priority}>
      <div className={Styles.priority__selected} ref={prioritySelectorRef}>
        <span className={Styles.priority__selected__label}>Priority</span>
        <span className={Styles.priority__selected__value}>
          {selectedPriority.name}
        </span>
        <i
          className={`fa fa-arrow-down fa-lg ${Styles.priority__selected__arrow} `}
        ></i>
      </div>
      <div className={Styles.priority__list} ref={priorityListRef}>
        {renderPriorityList()}
      </div>
    </div>
  );
};

export default Priority;
