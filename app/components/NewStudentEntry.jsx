import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, writeStudentGpa } from '../reducers/NewStudentEntry';
import { addNewStudent } from '../reducers/AllStudent';


function NewStudentEntry (props) {
  const { newStudentFirstName, newStudentLastName, newStudentEmail, newStudentGpa, handleSubmit, campuses } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            value={newStudentFirstName}
            className="form-control"
            type="text"
            name="firstName"
            placeholder="First Name"
          />

          <label>Last Name</label>
          <input
            value={newStudentLastName}
            className="form-control"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />

          <label>Email</label>
          <input
            value={newStudentEmail}
            className="form-control"
            type="text"
            name="email"
            placeholder="Email"
          />

          <label>GPA</label>
          <input
            value={newStudentGpa}
            className="form-control"
            type="integer"
            name="gpa"
            placeholder="GPA"
          />

          <select name='campusId'>
          {
            campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
          }
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    newStudentFirstName: state.newStudentEntry.newStudentFirstName,
    newStudentLastName: state.newStudentEntry.newStudentLastName,
    newStudentEmail: state.newStudentEntry.newStudentEmail,
    newStudentGpa: state.newStudentEntry.newStudentGpa,
    campuses: state.campuses
  };
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit: (evt) => {
      evt.preventDefault();
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const gpa = evt.target.gpa.value;
      const campusId = evt.target.campusId.value;
      const newStu ={
        firstName,
        lastName,
        email,
        gpa,
        CampusId: parseInt(campusId)
      }
      dispatch(addNewStudent(newStu, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudentEntry);


