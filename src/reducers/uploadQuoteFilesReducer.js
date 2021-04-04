import {
  ADD_QUOTE_FILE,
  CHANGE_QUOTE_FILE_DESCRIPTION,
  REMOVE_QUOTE_FILE,
} from "../actions/actionsTypes";

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
          description: "",
        },
      ];
    }

    case REMOVE_QUOTE_FILE:
      return state.filter((file) => file.inputName !== action.payload);

    case CHANGE_QUOTE_FILE_DESCRIPTION:
      const { inputName, value } = action.payload;
      const desiredFile = state.find((item) => item.inputName === inputName);
      const filteredState = state.filter(
        (item) => item.inputName !== inputName
      );
      desiredFile.description = value;
      const newState = [...filteredState, desiredFile];
      // newState.sort();
      return newState;
    default:
      return state;
  }
};
