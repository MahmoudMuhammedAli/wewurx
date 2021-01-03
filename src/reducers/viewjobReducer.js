import {
  SHOW_ADD_COST_ITMES,
  SHOW_VIEW_JOB,
  SHOW_VIEW_JOB_COST_ITEMS,
  SHOW_VIEW_JOB_FILES_AND_NOTES,
  SHOW_VIEW_JOB_FORMS,
  SHOW_VIEW_JOB_JOB_ACTIVITY,
  SHOW_VIEW_JOB_PROJECT_JOBS,
} from "../actions/actionsTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_VIEW_JOB_COST_ITEMS:
      return { showViewJobCostItems: true };
    case SHOW_VIEW_JOB_FORMS:
      return { showViewJobForms: true };
    case SHOW_VIEW_JOB_FILES_AND_NOTES:
      return { showViewJobFilesAndNotes: true };
    case SHOW_VIEW_JOB_JOB_ACTIVITY:
      return { showViewJobJobActivity: true };
    case SHOW_VIEW_JOB_PROJECT_JOBS:
      return { showViewJobProjectJobs: true };
    case SHOW_VIEW_JOB:
      return {};

    default:
      return state;
  }
};
