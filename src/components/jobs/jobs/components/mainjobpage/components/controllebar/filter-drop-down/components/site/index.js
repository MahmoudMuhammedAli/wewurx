import React from "react";
import Styles from "./site.module.scss";
import { reduxForm, Field } from "redux-form";

const Site = ({ change }) => {
  const names = [
    {
      id: "customer_id",
      firstName: "some first name",
      lastName: "some last name",
    },
    {
      id: "customer_id2",
      firstName: " first name",
      lastName: " last name",
    },
    {
      id: "customer_id4",
      firstName: " fname",
      lastName: " lname",
    },
  ];

  const changeAllFields = (value) => {
    names.forEach(({ id }) => {
      change(id, value);
    });
  };

  const checkAllFields = () => {
    changeAllFields(true);
  };
  const unCheckAllFields = () => {
    changeAllFields(false);
  };

  const handleAllChange = (e) => {
    const nextValue = e.target.checked;
    change("all", nextValue);

    if (nextValue) {
      return checkAllFields();
    }
    unCheckAllFields();
  };

  const renderCustomers = (sites) => {
    return (
      <>
        {" "}
        {sites.map(({ id, firstName, lastName }) => {
          return (
            <label className={Styles.site__sites__inputcontainer} key={id}>
              <div className={Styles.site__sites__inputwrapper}>
                <Field name={id} type='checkbox' component='input' />
              </div>
              <span className={Styles.site__sites__inputwrapper__name}>
                {firstName} {lastName}
              </span>
            </label>
          );
        })}
      </>
    );
  };

  return (
    <div className={Styles.site}>
      <div className='searchinputwrapper'>
        <Field
          name='search'
          component='input'
          type='text'
          className='searchinputwrapper__input'
          id='siteSearchFieldQuoteFilter'
        />
        <label htmlFor='siteSearchFieldQuoteFilter'>
          <i className='fa fa-search'></i>
        </label>
      </div>

      <div className={Styles.site__sites}>
        <label className={Styles.site__sites__inputcontainer}>
          <div className={Styles.site__sites__inputwrapper}>
            <Field
              name='all'
              type='checkbox'
              component='input'
              onChange={(e) => handleAllChange(e)}
            />
          </div>
          <span className={Styles.site__sites__inputwrapper__name}>All</span>
        </label>
        {renderCustomers(names)}
      </div>
    </div>
  );
};

export default reduxForm({ form: "quoteSiteFilter" })(Site);
