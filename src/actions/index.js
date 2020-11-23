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
