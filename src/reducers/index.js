import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import jobsReducer from './jobReducer';

export default combineReducers({
    jobs: jobsReducer,
    form: formReducer,
})