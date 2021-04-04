import { ADD_QUOTE_FILE, REMOVE_QUOTE_FILE } from "../actions/actionsTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE_FILE: {
      const { inputName, file, src, fileName } = action.payload;
      return [
        ...state,
        {
          inputName,
          file,
          src,
          fileName,
        },
      ];
    }

    case REMOVE_QUOTE_FILE:
      return state.filter((file) => file.inputName !== action.payload);
    default:
      return state;
  }
};
