import {
  SELECT_JOB_DUE_DATE,
  SELECT_JOB_START_DATE,
  SELECT_JOB_End_DATE,
  SET_NUMBER_OF_USERS,
  DECREASE_NUMBER_OF_USERS_BY_ONE,
  INCREASE_NUMBER_OF_USERS_BY_ONE,
  ADD_STAFF_MEMBER_START_DATE,
  ADD_INVOICE_FILE,
  REMOVE_INVOICE_FILE,
  ADD_QUOTE_FILE,
  REMOVE_QUOTE_FILE,
  CHANGE_QUOTE_FILE_DESCRIPTION,
  CHANGE_SCHEDULER_VIEW,
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

// ============= Start Send Invoice   action Creators =====================
// --------------------------------------------------------------------

export const removeInvoiceFile = (inputName) => {
  return {
    type: REMOVE_INVOICE_FILE,
    payload: inputName,
  };
};

export const addInvoiceFile = (inputName, fileName, file, src) => {
  return {
    type: ADD_INVOICE_FILE,
    payload: { fileName, inputName, file, src },
  };
};

// ============= Start Quote Upload Files action Creators =====================
// --------------------------------------------------------------------

export const addQuoteFile = (inputName, fileName, file, src) => {
  return {
    type: ADD_QUOTE_FILE,
    payload: { inputName, fileName, file, src },
  };
};

export const removeQuoteFile = (inputName) => {
  return {
    type: REMOVE_QUOTE_FILE,
    payload: inputName,
  };
};

export const changeQuoteFileDescription = (inputName, value) => {
  return {
    type: CHANGE_QUOTE_FILE_DESCRIPTION,
    payload: { inputName, value },
  };
};

// ============= Start actions for Scheduler View =====================
// --------------------------------------------------------------------

export const changeSchedulerView = (view) => {
  return {
    type: CHANGE_SCHEDULER_VIEW,
    payload: view,
  };
};
