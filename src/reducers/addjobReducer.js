import {
  SELECT_JOB_DUE_DATE,
  SELECT_JOB_End_DATE,
  SELECT_JOB_START_DATE,
} from "../actions/actionsTypes";

const initialState = {
  jobDueDate: new Date(),
  jobStartDate: new Date(),
  jobEndDate: new Date(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_JOB_DUE_DATE:
      return { ...state, jobDueDate: action.payload };
    case SELECT_JOB_START_DATE:
      return { ...state, jobStartDate: action.payload };
    case SELECT_JOB_End_DATE:
      return { ...state, jobEndDate: action.payload };
    default:
      return state;
  }
};
