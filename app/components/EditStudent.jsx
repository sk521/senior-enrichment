import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editStudent } from '../reducers/AllStudent';


function EditStudent (props) {
  const { handleSubmit, campuses, students } = props;
  const studentId = Number(props.match.params.studentId);
  const foundStudent = students.find(student => student.id === studentId);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">

            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              defaultValue={foundStudent.firstName}
            />

            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              defaultValue={foundStudent.lastName}
            />

            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              defaultValue={foundStudent.email}
            />

            <label>GPA</label>
            <input
              className="form-control"
              type="integer"
              name="gpa"
              defaultValue={foundStudent.gpa}
            />

            <select name="campus" defaultValue={foundStudent.CampusId}>
            {
              campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    )
  }


const mapStateToProps = function(state) {
  return {
    students: state.students,
    campuses: state.campuses
  };
};


const mapDispatchToProps = function(dispatch, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  const history = ownProps.history;

  return {
    handleSubmit(event) {
      event.preventDefault();
      const student = {
        id: studentId,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        gpa: event.target.gpa.value,
        CampusId: Number(event.target.campus.value)
      };
      dispatch(editStudent(student));
      history.push('/student_route');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
