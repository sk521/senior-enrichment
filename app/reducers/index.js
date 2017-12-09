/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import AllCampusReducer from './AllCampus';
import AllStudentReducer from './AllStudent';


const rootReducer = combineReducers({
  campuses: AllCampusReducer,
  students: AllStudentReducer
})

export default rootReducer;
