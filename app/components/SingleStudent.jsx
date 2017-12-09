import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SingleStudent (props) {
  const studentId = Number(props.match.params.studentId)
  const students = props.students;
  const foundStudent = students.find(student => student.id === studentId);
  const campuses = props.campuses;
  const foundCampus = campuses.find(campus => campus.id === foundStudent.CampusId);


  return (
    <div>
      <ul>
        <li>Name: {foundStudent.fullName}</li>
        <li>Email: {foundStudent.email}</li>
        <li>GPA: {foundStudent.gpa}</li>
        <NavLink to={`/campus_route/${foundStudent.CampusId}`}>
          <li>Campus: {foundCampus.name}</li>
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
