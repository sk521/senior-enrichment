import axios from 'axios';


// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';


// ACTION CREATORS
const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  };
};

const createNewStudent = (newStudent) => {
  return {
    type: CREATE_NEW_STUDENT,
    newStudent
  };
};


// THUNK CREATORS

export function fetchStudent () {

  return function thunk (dispatch) {
    return axios.get('/api/student_route')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
    });
  }
}

export function addNewStudent (student) {

  return function thunk (dispatch) {
    return axios.post('/api/studentId', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudents(newStudent);
        dispatch(action);
    });
  }
}


// REDUCER

const allStudentReducer = (state=[], action) => {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students

    case CREATE_NEW_STUDENT:
      return action.newStudent

    default:
      return state;
  }
}

export default allStudentReducer;
