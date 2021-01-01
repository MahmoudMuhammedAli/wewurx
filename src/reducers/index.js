import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import jobsReducer from "./jobReducer";
import addJobFormReducer from "./addjobReducer";

export default combineReducers({
  jobs: jobsReducer,
  form: formReducer,
  addJobForm: addJobFormReducer,
});
