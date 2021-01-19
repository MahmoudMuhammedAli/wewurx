import {
  DECREASE_NUMBER_OF_USERS_BY_ONE,
  INCREASE_NUMBER_OF_USERS_BY_ONE,
  SET_NUMBER_OF_USERS,
} from "../actions/actionsTypes";

const initialState = { numberOfUsers: 1 };

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER_OF_USERS_BY_ONE:
      return { numberOfUsers: state.numberOfUsers + 1 };
    case DECREASE_NUMBER_OF_USERS_BY_ONE:
      return { numberOfUsers: state.numberOfUsers - 1 };
    case SET_NUMBER_OF_USERS:
      return { numberOfUsers: action.payload };
    default:
      return state;
  }
};
