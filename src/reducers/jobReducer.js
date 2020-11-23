import {
  SHOW_ADD_COST_ITMES,
  SHOW_ADD_JOBS,
  SHOW_ADD_JOB_PROJECTS,
  SHOW_FILES_AND_NOTES,
  SHOW_FORMS,
  SHOW_INVOICES,
  SHOW_JOBS,
  SHOW_PURCHASES,
  SHOW_QUOTES,
} from "../actions/actionsTypes";

let initialState = {
  shouldDisplayQuotes: null,
  shouldDisplayJobs: {},
  shouldDisplayInvoices: null,
  shouldDisplayPurchase: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUOTES:
      return {
        shouldDisplayQuotes: {},
      };
    case SHOW_JOBS:
      return {
        shouldDisplayJobs: {},
      };
    case SHOW_INVOICES:
      return {
        shouldDisplayInvoices: {},
      };
    case SHOW_PURCHASES:
      return {
        shouldDisplayPurchase: {},
      };
    case SHOW_ADD_JOBS:
      return {
        shouldDisplayJobs: {
          shouldDisplaySecondaryPage: {
            shouldDisplayAddJobs: true,
          },
        },
      };
    case SHOW_ADD_COST_ITMES:
      return {
        shouldDisplayJobs: {
          shouldDisplaySecondaryPage: {
            shouldDisplayAddCostItems: true,
          },
        },
      };
    case SHOW_ADD_JOB_PROJECTS:
      return {
        shouldDisplayJobs: {
          shouldDisplaySecondaryPage: {
            shouldDisplayAddJobProjects: true,
          },
        },
      };
    case SHOW_FILES_AND_NOTES:
      return {
        shouldDisplayJobs: {
          shouldDisplaySecondaryPage: {
            shouldDisplayFilesAndNotes: true,
          },
        },
      };
    case SHOW_FORMS:
      return {
        shouldDisplayJobs: {
          shouldDisplaySecondaryPage: {
            shouleDisplayForms: true,
          },
        },
      };

    default:
      return state;
  }
};
