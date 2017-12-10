// ACTION TYPES

const WRITE_STUDENT_FIRSTNAME = 'WRITE_STUDENT_FIRSTNAME';
const WRITE_STUDENT_LASTNAME = 'WRITE_STUDENT_LASTNAME';
const WRITE_STUDENT_EMAIL = 'WRITE_CAMPUS_EMAIL';
const WRITE_STUDENT_GPA = 'WRITE_CAMPUS_GPA';

// ACTION CREATORS

export function writeStudentFirstName (studentFirstName) {
  const action = { type: WRITE_STUDENT_FIRSTNAME, studentFirstName };
  return action;
}

export function writeStudentLastName (studentLastName) {
  const action = { type: WRITE_STUDENT_LASTNAME, studentLastName };
  return action;
}

export function writeStudentEmail (studentEmail) {
  const action = { type: WRITE_STUDENT_EMAIL, studentEmail };
  return action;
}

export function writeStudentGpa (studentGpa) {
  const action = { type: WRITE_STUDENT_GPA, studentGpa };
  return action;
}


// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_STUDENT_FIRSTNAME:
      return action.studentFirstName;

    case WRITE_STUDENT_LASTNAME:
      return action.studentLastName;

    case WRITE_STUDENT_EMAIL:
      return action.studentEmail;

    case WRITE_STUDENT_GPA:
      return action.studentGpa;

    default:
      return state;
  }

}
