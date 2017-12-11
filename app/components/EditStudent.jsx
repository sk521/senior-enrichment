import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNewStudent } from '../reducers/AllStudent';


class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      CampusId: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleChangeLastName(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleChangeGpa(event) {
    this.setState({
      gpa: event.target.value
    })
  }

  handleChangeCampusId(event) {
    this.setState({
      campusId: event.target.value
    })
  }


  render() {
    const { editStudentFirstName, editStudentLastName, editStudentEmail, editStudentGpa, handleSubmit, campuses, students } = this.props;
    const studentId = Number(this.props.match.params.studentId);
    const foundStudent = students.find(student => student.id === studentId);
    console.log('THIS IS FOUND STUDENT ', foundStudent);

    return (
      <div>
        <form onSubmit={handleSubmit(studentId, this.state)}>
          <div className="form-group">
            <label>First Name</label>
            <input
              value={this.state.firstName}
              className="form-control"
              type="text"
              name="firstName"
              placeholder={foundStudent.firstName}
              onChange={this.handleChangeFirstName}
            />

            <label>Last Name</label>
            <input
              value={this.state.lastName}
              className="form-control"
              type="text"
              name="lastName"
              placeholder={foundStudent.lastName}
              onChange={this.handleChangeLastName}
            />

            <label>Email</label>
            <input
              value={this.state.email}
              className="form-control"
              type="text"
              name="email"
              placeholder={foundStudent.email}
              onChange={this.handleChangeEmail}
            />

            <label>GPA</label>
            <input
              value={this.state.gpa}
              className="form-control"
              type="integer"
              name="gpa"
              placeholder={foundStudent.gpa}
              onChange={this.handleChangeGpa}
            />

            <select name='campusId' onChange={this.handleChangeCampusId}>
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
}



const mapStateToProps = function(state) {
  return {
    editStudentFirstName: state.newStudentEntry.editStudentFirstName,
    editStudentLastName: state.newStudentEntry.editStudentLastName,
    editStudentEmail: state.newStudentEntry.editStudentEmail,
    editStudentGpa: state.newStudentEntry.editStudentGpa,
    campuses: state.campuses,
    students: state.students
  };
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleSubmit: (studentId, newStudentState, evt) => {
      evt.preventDefault();
      dispatch(editNewStudent(studentId, newStudentState, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudent);


