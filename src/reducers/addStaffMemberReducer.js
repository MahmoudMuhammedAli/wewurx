import { ADD_STAFF_MEMBER_START_DATE } from "../actions/actionsTypes";

const initialState = {
  startDate: new Date(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STAFF_MEMBER_START_DATE:
      return { ...state, startDate: action.payload };

    default:
      return state;
  }
};
