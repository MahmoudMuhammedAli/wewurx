import { ADD_INVOICE_FILE, REMOVE_INVOICE_FILE } from "../actions/actionsTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE_FILE: {
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

    case REMOVE_INVOICE_FILE:
      return state.filter((file) => file.inputName !== action.payload);

    default:
      return state;
  }
};
