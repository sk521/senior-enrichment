import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { deleteStudent } from '../reducers/AllStudent';

function SingleStudent (props) {
  const { handleDelete, students, campuses } = props;
  const studentId = Number(props.match.params.studentId)
  const foundStudent = students.find(student => student.id === studentId);
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
      </ul>

       <NavLink to={`/student_route/${foundStudent.id}/edit_student`}>
          <button>Edit Student</button>
       </NavLink>

        <button onClick={handleDelete}>Remove Student</button>
    </div>
  )
}



const mapStateToProps = function(state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  const foundStudent = state.students.find(student => student.id === studentId);

  return {
    campuses: state.campuses,
    students: state.students,
    foundStudent
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  const { history } = ownProps;

  return {
    handleDelete(event) {
      event.preventDefault();
      dispatch(deleteStudent(studentId));
      history.push('/student_route');
    }
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent));
