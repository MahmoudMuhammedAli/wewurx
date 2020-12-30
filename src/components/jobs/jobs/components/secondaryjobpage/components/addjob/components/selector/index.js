import React, { useEffect, useState, useRef } from "react";
import Styles from "./selector.module.scss";
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
    <div className={`${Styles.selector__input} ${className}`}>
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

const Selector = ({
  formValues,
  name,
  linkOfTheNotAvailable,
  loadData,
  heading,
  className,
}) => {
  // load data must return a promise that resolves with an array to update the options
  // remember the elements of the array must be an objects with the following
  // {name:'the name  that would be displayed', value:'the name that will be in the redux form'}
  const inputRef = useRef(null);
  const skillContainerRef = useRef(null);
  const [skills, setSkills] = useState(null);
  let selectedSkills = [];
  if (formValues) {
    if (formValues.all) {
      selectedSkills = [...skills];
    } else {
      for (let skill of skills) {
        if (formValues[skill.value]) {
          selectedSkills.push(skill);
        }
      }
    }
  }
  const renderStuffSkills = (containerRef) => {
    if (!skills) {
      return (
        <div
          ref={containerRef}
          data-id='noSkills'
          className={`${Styles.selector__noskills} ${Styles.selector__container} `}
        >
          <span>
            No{" "}
            <Link to={linkOfTheNotAvailable}>
              {name ? name : "provide a name props to be displayed here"}
            </Link>{" "}
            available
          </span>
        </div>
      );
    }
    return (
      <div
        ref={containerRef}
        data-id='skills'
        className={`${Styles.selector__skillscontainer} ${Styles.selector__container} `}
      >
        <Field
          component={renderField}
          icon='fa fa-search fa-lg'
          name='skillSearch'
          className={Styles.selector__skillscontainer__search}
        />

        <div
          className={`${Styles.selector__skillscontainer__item} ${Styles.selector__skillscontainer__itemAll}`}
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
            className={Styles.selector__skillscontainer__item}
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

  // the animation useEffect not related to the logic
  useEffect(() => {
    let isContainerOpened = false;
    const openSkillsContainer = () => {
      skillContainerRef.current.style.display = "block";
      setTimeout(() => {
        if (skillContainerRef.current.dataset.id === "noSkills") {
          skillContainerRef.current.style.display = "flex";
          return (skillContainerRef.current.style.height = "3rem");
        }
        skillContainerRef.current.style.height = "11rem";
      }, 0);
      isContainerOpened = true;
    };
    const closeSkillsContainer = () => {
      skillContainerRef.current.style.height = "0";
      setTimeout(() => {
        skillContainerRef.current.style.display = "none";
      }, 300);
      isContainerOpened = false;
    };
    inputRef.current.addEventListener("click", (e) => {
      if (e.target !== inputRef.current) return;
      if (isContainerOpened) {
        return closeSkillsContainer();
      }
      openSkillsContainer();
    });
  }, []);
  // end the effect of the animation  start to look into the logic
  useEffect(() => {
    // you need to set the skills array
    // the option of the arrays
    loadData().then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div
      ref={inputRef}
      className={`${Styles.selector} ${className ? className : ""}`}
    >
      {selectedSkills.length === 0
        ? heading
        : selectedSkills.map(({ name, value }) => {
            return <span key={value}>{name},</span>;
          })}
      {renderStuffSkills(skillContainerRef)}
      <i className='fa fa-arrow-down fa-lg'></i>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    formValues: state.form.addCustomer?.values,
  };
};

export default connect(mapStateToProps)(Selector);
