import axios from 'axios';


// ACTION TYPES
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';


// ACTION CREATORS
const getStudent = (student) => {
  return {
    type: GET_STUDENT,
    student
  }
}

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

export function addNewStudent (student, history) {
  console.log('entering thuk',student)
  return function thunk (dispatch) {
    return axios.post('/api/student_route', student)
      .then(res => res.data)
      .then(newStudent => {
        console.log('exiting thunk', newStudent)
        dispatch(getStudent(newStudent));
        history.push(`/student_route/${newStudent.id}`);
    });
  }
}

export function editStudent(studentId, student, history) {
  return function thunk(dispatch) {
    console.log("IN EDIT STUDENT THUNK");
    return axios.put(`/api/student_route/${studentId}`, student)
      .then(res => res.data)
      .then(updatedStudent => {
        dispatch(getStudent(updatedStudent));
        dispatch(fetchStudent());
        history.push(`/student_route/${updatedStudent.id}`);
      })
  }
}




// REDUCER

const allStudentReducer = (state=[], action) => {
  switch (action.type) {

    case GET_STUDENT:
      return [...state, action.student];

    case GET_STUDENTS:
      return action.students

    case CREATE_NEW_STUDENT:
      return action.newStudent

    default:
      return state;
  }
}

export default allStudentReducer;

