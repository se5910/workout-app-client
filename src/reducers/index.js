import { combineReducers } from 'redux';
import errorReducer from './errorReducer'
import authReducer from './authReducer';
import planReducer from './planReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  plans: planReducer,
  profile: profileReducer
})
