import React, { useEffect, useRef, useState } from "react";
import { Field, reduxForm } from "redux-form";
import WorkerDropdown from "./workers-dropdown";
import Styles from "./worker-selector.module.scss";

const WorkerSelector = (props) => {
  const [isWorkersDropdownOpened, setIsWorkersDropdownOpened] = useState(true);
  // ref for the drop down (nested element to control its styling when the drop down is opened)
  const workerSelectorRef = useRef(null);
  // this logic is for the worker selector
  useEffect(() => {
    if (!isWorkersDropdownOpened) {
      // close it by setting the stying to heigh 0 and scaleY 0
      workerSelectorRef.current.style.height = "0px";
      setTimeout(() => {
        workerSelectorRef.current.style.transform = "scaleY(0)";
      }, 100);
      return;
    }
    workerSelectorRef.current.style.transform = "scaleY(1)";

    setTimeout(() => {
      workerSelectorRef.current.style.height = "4rem";
    }, 50);
  }, [isWorkersDropdownOpened]);

  const toggleSelectoWorkerDropdown = () => {
    console.log("from input click");
    if (isWorkersDropdownOpened) return setIsWorkersDropdownOpened(false);
    setIsWorkersDropdownOpened(true);
  };
  return (
    <div className={Styles.workerselector}>
      <h3 className={Styles.workerselector__heading}>Select worker</h3>
      <div
        className={Styles.workerselector__inputwrapper}
        onClick={toggleSelectoWorkerDropdown}
      >
        <Field
          name='worker'
          component='input'
          type='text'
          className={Styles.workerselector__input}
        />
        <i className='fa fa-arrow-circle-down'></i>
      </div>
      <WorkerDropdown dropdownRef={workerSelectorRef} />
    </div>
  );
};

export default reduxForm({ form: "workerSelector" })(WorkerSelector);
