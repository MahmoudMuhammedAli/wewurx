import { SELECT_JOB_DUE_DATE } from "../actions/actionsTypes";

const initialState = { jobDueDate: new Date() };

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_JOB_DUE_DATE:
      return { ...state, jobDueDate: action.payload };
    default:
      return state;
  }
};
