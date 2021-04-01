import React, { useEffect, useRef } from "react";
import Styles from "./workforceselector.module.scss";
import { Field } from "redux-form";
import { connect } from "react-redux";
import Selector from "../selector";

const renderField = ({
  placeholder,
  componentRef,
  className,
  type,
  input,
  icon,
}) => {
  return (
    <div className={`${Styles.workforceselector__input} ${className}`}>
      <input
        {...input}
        ref={componentRef}
        type={type}
        placeholder={placeholder}
      />

      <i className={icon}></i>
    </div>
  );
};
const loadSkillsData = () => {
  return Promise.resolve([
    { name: "playing", value: "playing" },
    { name: "Another playing", value: "anotherPlaying" },
    { name: "chessing", value: "chess" },
  ]);
};

const loadTeamsData = () => {
  return Promise.resolve([{ name: "Egyptian Team", value: "egyptianTeam" }]);
};

const WorkForceSelector = (props) => {
  const inputRef = useRef(null);
  const workDetailsRef = useRef(null);
  const skillContainerRef = useRef(null);

  useEffect(() => {
    let isWorkDetailsOpened = false;

    const openWorkDetails = () => {
      workDetailsRef.current.style.display = "block";
      setTimeout(() => {
        workDetailsRef.current.style.height = "30rem";
      }, 0);
      isWorkDetailsOpened = true;
    };

    const closeWorkDetails = () => {
      workDetailsRef.current.style.height = "0";
      setTimeout(() => {
        workDetailsRef.current.style.display = "none";
      }, 300);
      isWorkDetailsOpened = false;
    };

    inputRef.current.addEventListener("click", (e) => {
      if (isWorkDetailsOpened) {
        return closeWorkDetails();
      }
      openWorkDetails();
    });
  }, []);

  return (
    <div className={Styles.workforceselector}>
      <Field
        componentRef={inputRef}
        type='text'
        component={renderField}
        name='WorkSelector'
        icon='fa fa-arrow-down fa-lg'
      />
      <div
        className={Styles.workforceselector__workerdetails}
        ref={workDetailsRef}
      >
        <Selector
          name='skills'
          linkOfTheNotAvailble='#'
          loadData={loadSkillsData}
          heading='Stuff skills'
          className={Styles.workforceselector__workerdetails__skills}
        />
        <Selector
          name='teams'
          linkOfTheNotAvailble='#'
          loadData={loadTeamsData}
          heading='teams'
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.addCustomer?.values,
  };
};

export default connect(mapStateToProps)(WorkForceSelector);
