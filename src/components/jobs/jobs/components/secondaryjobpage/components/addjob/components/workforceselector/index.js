import React, { useEffect, useRef, useState } from "react";
import Styles from "./workforceselector.module.scss";
import { Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

const WorkForceSelector = (props) => {
  const inputRef = useRef(null);
  const workDetailsRef = useRef(null);
  const [skills, setSkills] = useState(null);
  let selectedSkills = [];
  if (props.formValues) {
    if (props.formValues.all) {
      selectedSkills = [...skills];
    } else {
      for (let skill of skills) {
        if (props.formValues[skill.value]) {
          selectedSkills.push(skill);
        }
      }
    }
  }

  const renderStuffSkills = () => {
    if (!skills) {
      return (
        <div
          className={`${Styles.workforceselector__workerdetails__stuffskills__noskills} ${Styles.workforceselector__workerdetails__stuffskills__container} `}
        >
          <span>
            No <Link to='#'>Skills</Link> available
          </span>
        </div>
      );
    }
    return (
      <div
        className={`${Styles.workforceselector__workerdetails__stuffskills__skillscontainer} ${Styles.workforceselector__workerdetails__stuffskills__container} `}
      >
        <Field
          component={renderField}
          icon='fa fa-search fa-lg'
          name='skillSearch'
          className={
            Styles.workforceselector__workerdetails__stuffskills__skillscontainer__search
          }
        />

        <div
          className={`${Styles.workforceselector__workerdetails__stuffskills__skillscontainer__item} ${Styles.workforceselector__workerdetails__stuffskills__skillscontainer__itemAll}`}
        >
          <label>
            {" "}
            <Field name='all' component='input' type='checkbox' />
            All
          </label>{" "}
        </div>
        {skills.map((skill) => (
          <div
            key={skill.value}
            className={
              Styles.workforceselector__workerdetails__stuffskills__skillscontainer__item
            }
          >
            <label>
              {" "}
              <Field name={skill.value} component='input' type='checkbox' />
              {skill.name}{" "}
            </label>{" "}
          </div>
        ))}
      </div>
    );
  };

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
    setTimeout(() => {
      setSkills([
        { name: "playing", value: "playing" },
        { name: "another playing", value: "anotherPlaying" },
      ]);
    }, 2000);
    // setTimeout(() => {
    //   const selectedSkills = ["playing", "another playing"];
    //   setSelectedSkills(selectedSkills);
    // }, 3000);
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
        <div className={Styles.workforceselector__workerdetails__stuffskills}>
          {selectedSkills.length === 0
            ? "Staff skills"
            : selectedSkills.map(({ name, value }) => {
                return <span key={value}>{name},</span>;
              })}
          {renderStuffSkills()}
          <i className='fa fa-arrow-down fa-lg'></i>
        </div>
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
