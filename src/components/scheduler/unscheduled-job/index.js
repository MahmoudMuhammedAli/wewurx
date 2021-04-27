import React, { useEffect, useRef, useState } from "react";
import DropDown from "./drop-down";
import Styles from "./unscheduled-job.module.scss";

const UnScheduledJob = ({
  jobNumber,
  jobName,
  jobDurationQuantitiy,
  jobDurationWeight,
  customerFName,
  customerLName,
}) => {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const topRef = useRef(0);
  const leftRef = useRef(0);
  const itemRef = useRef(0);
  const openDropDown = (e) => {
    topRef.current = itemRef.current.getBoundingClientRect().bottom;
    leftRef.current = e.clientX;

    //clicking the document outside the element itself to close any opened dropdowns
    document.getElementsByTagName("body")[0].click();
    setIsDropDownOpened(true);
  };
  const handleItemClick = (e) => {
    if (!isDropDownOpened) return openDropDown(e);
    setIsDropDownOpened(false);
    setTimeout(() => {
      openDropDown(e);
    }, 0);
  };

  // effect for closing the dropdown on click outside the item
  useEffect(() => {
    const clickHandler = (e) => {
      const closestElement = e.target.closest("." + Styles.unscheduledWrapper);
      if (closestElement) return;
      setIsDropDownOpened(false);
    };
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div className={Styles.unscheduledWrapper}>
      <div
        className={Styles.unscheduled}
        draggable
        onClick={handleItemClick}
        ref={itemRef}
      >
        <div className={Styles.unscheduled__top}>
          <div className={Styles.unscheduled__top__name}>
            <span className={Styles.unscheduled__top__name__number}>
              {jobNumber}
            </span>{" "}
            <span className={Styles.unscheduled__top__name__name}>
              {jobName}
            </span>
          </div>
          <i className='fa fa-arrows'></i>
        </div>
        <div className={Styles.unscheduled__bottom}>
          <div className={Styles.unscheduled__bottom__duration}>
            {jobDurationQuantitiy} {jobDurationWeight}
          </div>
          <div className={Styles.unscheduled__bottom__customername}>
            <span>{customerFName}</span> <span>{customerLName}</span>
          </div>
        </div>
      </div>

      {isDropDownOpened ? (
        <DropDown
          top={topRef.current}
          left={leftRef.current}
          setIsDropDownOpened={setIsDropDownOpened}
        />
      ) : (
        " "
      )}
    </div>
  );
};

export default UnScheduledJob;
