import axios from 'axios';


// ACTION TYPES
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';


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

const updateStudent = (updatedStudent) => {
  return {
    type: EDIT_STUDENT,
    updatedStudent
  };
};

const removeStudent = (studentId) => {
  return {
    type: DELETE_STUDENT,
    studentId
  }
}


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

export function editStudent(updatedStudent) {
  return function thunk(dispatch) {
    return axios.put(`/api/student_route/${updatedStudent.id}`, updatedStudent)
      .then(res => res.data)
      .then(student =>
        dispatch(updateStudent(student))
    );
  }
}

export function deleteStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/student_route/${studentId}`)
      .then(() =>
        dispatch(removeStudent(studentId))
    );
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

    case EDIT_STUDENT:
      return state.map(student => student.id !== action.updatedStudent.id ? student : action.updatedStudent);

    case DELETE_STUDENT:
      return state.filter(student => {
        if (student.id !== action.studentId) {
          return student
      }
    })

    default:
      return state;
  }
}

export default allStudentReducer;

