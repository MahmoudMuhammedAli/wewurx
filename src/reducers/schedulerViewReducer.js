import { CHANGE_SCHEDULER_VIEW } from "../actions/actionsTypes";

export default (state = { timeline: true }, action) => {
  switch (action.type) {
    case CHANGE_SCHEDULER_VIEW:
      return { [action.payload]: true };
    default:
      return state;
  }
};
