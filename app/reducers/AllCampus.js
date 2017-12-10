import axios from 'axios';

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_NEW_CAMPUS = 'CREATE_NEW_CAMPUS';


// ACTION CREATORS
const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  }
}


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

export function addNewCampus (campus, history) {

  return function thunk (dispatch) {
    return axios.post('/api/campus_route', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampus(newCampus));
        history.push(`/campus_route/${newCampus.id}`);
    });
  }
}



// REDUCER

const allCampusReducer = (state=[], action) => {
  switch (action.type) {

    case GET_CAMPUS:
      return [...state, action.campus];

    case GET_CAMPUSES:
      return action.campuses

    case CREATE_NEW_CAMPUS:
      return action.newCampus

    default:
      return state;
  }
}

export default allCampusReducer;
