import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import jobsReducer from "./jobReducer";
import addCustomerFormReducer from "./addjobReducer";

export default combineReducers({
  jobs: jobsReducer,
  form: formReducer,
  addCustomerFormReducer,
});
