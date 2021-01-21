import React, { useState } from "react";
import { connect } from "react-redux";
import Styles from "./users.module.scss";
import { selectedPrice } from "../shared";
import {
  increaseNumberOfUsersByOne,
  decreaseNumberOfUsersByOne,
  setNumberOfUsers,
} from "../../../../../actions";
import TermsAndConditions from "../termsandconditions";
const Users = ({
  selectedPackage,
  numberOfUsers,
  increaseNumberOfUsersByOne,
  setNumberOfUsers,
  decreaseNumberOfUsersByOne,
}) => {
  const pricePerUser = selectedPrice(selectedPackage).value;
  const totalPrice = numberOfUsers * pricePerUser.toFixed(2);

  const handleIncreaseUsersClick = (e) => {
    increaseNumberOfUsersByOne();
  };
  const handleDecreaseUsersClick = (e) => {
    if (numberOfUsers === 1) return;

    decreaseNumberOfUsersByOne();
  };
  const handleSetUsersInputChange = (e) => {
    if (+e.target.value < 1 && e.target.value !== "") return;

    setNumberOfUsers(e.target.value);
  };

  return (
    <div className={Styles.users}>
      <div className={Styles.users__users}>
        <div className={Styles.users__users__staffmemberscollector}>
          <div className={Styles.users__users__staffmemberscollector__input}>
            <h5
              className={
                Styles.users__users__staffmemberscollector__input__heading
              }
            >
              Users
            </h5>
            <div
              className={
                Styles.users__users__staffmemberscollector__input__inputwrapper
              }
            >
              <input
                name='numberOfUsers'
                type='number'
                className={
                  Styles.users__users__staffmemberscollector__input__inputwrapper__input
                }
                value={numberOfUsers}
                min='1'
                onChange={handleSetUsersInputChange}
              />
              <span
                className={
                  Styles.users__users__staffmemberscollector__input__inputwrapper__label
                }
              >
                {" "}
                Staff members
              </span>
            </div>
          </div>
          <div className={Styles.users__users__staffmemberscollector__buttons}>
            <button onClick={handleDecreaseUsersClick}>
              <i className='fa fa-minus'></i>
            </button>
            <button onClick={handleIncreaseUsersClick}>
              <i className='fa fa-plus'></i>
            </button>
          </div>
          <div
            className={
              Styles.users__users__staffmemberscollector__pricesdetails
            }
          >
            <span
              className={
                Styles.users__users__staffmemberscollector__pricesdetails__priceperuser
              }
            >
              £{pricePerUser.toFixed(2)}/user
            </span>
            <span
              className={
                Styles.users__users__staffmemberscollector__pricesdetails__totalprice
              }
            >
              £{totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <a href='#' className={Styles.users__link}>
        1 currently used
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedPackage: state.form.package?.values.packageValue,
    numberOfUsers: state.subscriptions.numberOfUsers,
  };
};
export default connect(mapStateToProps, {
  increaseNumberOfUsersByOne,
  decreaseNumberOfUsersByOne,
  setNumberOfUsers,
})(Users);
