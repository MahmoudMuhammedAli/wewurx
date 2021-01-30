import {
  SELECT_JOB_DUE_DATE,
  SELECT_JOB_START_DATE,
  SELECT_JOB_End_DATE,
  SET_NUMBER_OF_USERS,
  DECREASE_NUMBER_OF_USERS_BY_ONE,
  INCREASE_NUMBER_OF_USERS_BY_ONE,
  ADD_STAFF_MEMBER_START_DATE,
} from "./actionsTypes";

// ============= Start   addCustomer  form Action Creators ==============
// --------------------------------------------------------------
export const selectJobDueDate = (date) => (dispatch) => {
  dispatch({
    type: SELECT_JOB_DUE_DATE,
    payload: date,
  });
};

export const selectJobStartDate = (date) => {
  return {
    type: SELECT_JOB_START_DATE,
    payload: date,
  };
};
export const selectJobEndDate = (date) => {
  return {
    type: SELECT_JOB_End_DATE,
    payload: date,
  };
};

// ============= Starting Subscription  action Creators =====================
// --------------------------------------------------------------------

export const increaseNumberOfUsersByOne = () => {
  return { type: INCREASE_NUMBER_OF_USERS_BY_ONE };
};

export const decreaseNumberOfUsersByOne = () => {
  return { type: DECREASE_NUMBER_OF_USERS_BY_ONE };
};
export const setNumberOfUsers = (number) => (dispatch) => {
  dispatch({
    type: SET_NUMBER_OF_USERS,
    payload: number,
  });
};

// ============= Starting add staff member  action Creators =====================
// --------------------------------------------------------------------

export const addStaffMemberStartDate = (date) => (dispatch) => {
  dispatch({
    type: ADD_STAFF_MEMBER_START_DATE,
    payload: date,
  });
};

// ============= Starting add staff member  action Creators =====================
// --------------------------------------------------------------------
