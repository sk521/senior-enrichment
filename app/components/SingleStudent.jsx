import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SingleStudent (props) {
  const studentId = Number(props.match.params.studentId)
  const students = props.students;
  const foundStudent = students.find(student => student.id === studentId);
  const campuses = props.campuses;
  const foundCampus = campuses.find(campus => foundStudent.CampusId === campus.id);

  if (!campuses) return (<div>it didnt go through</div>)
  else return (
    <div>
      <ul>
        <li>Name: {foundStudent.fullName}</li>
        <li>Email: {foundStudent.email}</li>
        <li>GPA: {foundStudent.gpa}</li>
        <NavLink to={`/campus_route/${foundStudent.CampusId}`}>
          <li>Campus: {foundCampus.name}</li>
        </NavLink>


        <NavLink to={`/student_route/${foundStudent.id}/edit`}>
          <button>Edit Student</button>
        </NavLink>
      </ul>
    </div>
  )
}



const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const SingleStudentContainer = connect(mapStateToProps)(SingleStudent);
export default SingleStudentContainer;
