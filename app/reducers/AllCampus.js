import axios from 'axios';

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_NEW_CAMPUS = 'CREATE_NEW_CAMPUS';


// ACTION CREATORS
const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

const createNewCampus = (newCampus) => {
  return {
    type: CREATE_NEW_CAMPUS,
    newCampus
  };
};


// THUNK CREATORS

export function fetchCampus () {

  return function thunk (dispatch) {
    return axios.get('/api/campus_route')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
    });
  }
}

export function addNewCampus (campus) {

  return function thunk (dispatch) {
    return axios.post('/api/campusId', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampuses(newCampus);
        dispatch(action);
    });
  }
}



// REDUCER

const allCampusReducer = (state=[], action) => {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses

    case CREATE_NEW_CAMPUS:
      return action.newCampus

    default:
      return state;
  }
}

export default allCampusReducer;
