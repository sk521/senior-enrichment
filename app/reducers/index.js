import { combineReducers } from 'redux'
import AllCampusReducer from './AllCampus';
import AllStudentReducer from './AllStudent';
import NewCampusEntry from './NewCampusEntry';
import NewStudentEntry from './NewStudentEntry';


const rootReducer = combineReducers({
  campuses: AllCampusReducer,
  students: AllStudentReducer,
  newCampusEntry: NewCampusEntry,
  newStudentEntry: NewStudentEntry
})

export default rootReducer;

// export * from './NewCampusEntry';
