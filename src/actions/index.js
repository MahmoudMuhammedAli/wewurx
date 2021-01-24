import {
  SHOW_INVOICES,
  SHOW_JOBS,
  SHOW_PURCHASES,
  SHOW_QUOTES,
  SHOW_ADD_JOBS,
  SHOW_ADD_COST_ITMES,
  SHOW_ADD_JOB_PROJECTS,
  SHOW_FILES_AND_NOTES,
  SHOW_FORMS,
  SELECT_JOB_DUE_DATE,
  SELECT_JOB_START_DATE,
  SELECT_JOB_End_DATE,
  SHOW_VIEW_JOB_COST_ITEMS,
  SHOW_VIEW_JOB_FORMS,
  SHOW_VIEW_JOB_PROJECT_JOBS,
  SHOW_VIEW_JOB_JOB_ACTIVITY,
  SHOW_VIEW_JOB,
  SHOW_VIEW_JOB_FILES_AND_NOTES,
  SET_NUMBER_OF_USERS,
  DECREASE_NUMBER_OF_USERS_BY_ONE,
  INCREASE_NUMBER_OF_USERS_BY_ONE,
  ADD_STAFF_MEMBER_START_DATE,
} from "./actionsTypes";

// ============= Starting Job Page Action Creators ==============
// --------------------------------------------------------------
export const showQuotes = () => {
  return {
    type: SHOW_QUOTES,
  };
};
// ============= Starting nested Job  Page Action Creators ==============
// --------------------------------------------------------------

export const showJobs = () => {
  return {
    type: SHOW_JOBS,
  };
};
export const showAddJobs = () => {
  return {
    type: SHOW_ADD_JOBS,
  };
};
export const showCostItems = () => {
  return {
    type: SHOW_ADD_COST_ITMES,
  };
};
export const showAddJobProjects = () => {
  return { type: SHOW_ADD_JOB_PROJECTS };
};
export const showFilesAndNotes = () => {
  return {
    type: SHOW_FILES_AND_NOTES,
  };
};
export const showForms = () => {
  return {
    type: SHOW_FORMS,
  };
};
// ============= Ending nested Job  Page Action Creators ==============
// --------------------------------------------------------------
export const showInvoices = () => {
  return {
    type: SHOW_INVOICES,
  };
};

export const showPurchases = () => {
  return {
    type: SHOW_PURCHASES,
  };
};
// ============= Ending  Job  Page Action Creators ==============
// --------------------------------------------------------------
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
// ============= End   addCustomer  form Action Creators ==============
// --------------------------------------------------------------

// ============= Starting ViewJob action Creators =====================
// --------------------------------------------------------------------

export const showViewJobCostItems = () => {
  return { type: SHOW_VIEW_JOB_COST_ITEMS };
};
export const showViewJobForms = () => {
  return { type: SHOW_VIEW_JOB_FORMS };
};
export const showViewJobFilesAndNotes = () => {
  return {
    type: SHOW_VIEW_JOB_FILES_AND_NOTES,
  };
};
export const showViewJobProjectJobs = () => {
  return {
    type: SHOW_VIEW_JOB_PROJECT_JOBS,
  };
};
export const showViewJobJobActivity = () => {
  return {
    type: SHOW_VIEW_JOB_JOB_ACTIVITY,
  };
};
export const showViewJob = () => {
  return { type: SHOW_VIEW_JOB };
};

// ============= Ending ViewJob action Creators =====================
// --------------------------------------------------------------------

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
