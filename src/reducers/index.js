import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import jobsReducer from "./jobReducer";
import addJobFormReducer from "./addjobReducer";
import viewJobReducer from "./viewjobReducer";
import subscriptionReducer from "./subscriptionsReducers";

export default combineReducers({
  jobs: jobsReducer,
  form: formReducer,
  addJobForm: addJobFormReducer,
  viewJob: viewJobReducer,
  subscriptions: subscriptionReducer,
});
