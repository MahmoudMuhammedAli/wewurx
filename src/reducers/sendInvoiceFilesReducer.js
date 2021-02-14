import {
  ADD_INVOICE_FILE,
  INCREASE_NUMBER_OF_INVOICE_INPUT_FILES,
  REMOVE_INVOICE_FILE,
} from "../actions/actionsTypes";

const initialState = {
  numberOfInvoiceInputFiles: 1,
  invoiceInputFilesValues: {
    file1: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER_OF_INVOICE_INPUT_FILES:
      return {
        ...state,
        numberOfInvoiceInputFiles: state.numberOfInvoiceInputFiles + 1,
      };

    case ADD_INVOICE_FILE:
      return {
        ...state,
        invoiceInputFilesValues: {
          ...state.invoiceInputFilesValues,
          [action.payload.name]: action.payload.file,
        },
      };

    case REMOVE_INVOICE_FILE:
      const oldState = { ...state };
      delete oldState[action.payload];
      oldState.numberOfInvoiceInputFiles--;
      return oldState;

    default:
      return state;
  }
};
