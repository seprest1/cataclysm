import { combineReducers } from 'redux';
import user from './user.reducer';

const rootReducer = combineReducers({
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
