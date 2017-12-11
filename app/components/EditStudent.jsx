import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editStudent } from '../reducers/AllStudent';


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
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeGpa = this.handleChangeGpa.bind(this);
    this.handleChangeCampusId = this.handleChangeCampusId.bind(this);
  }

  handleChangeFirstName(evt) {
    this.setState({
      firstName: evt.target.value
    });
  }

  handleChangeLastName(evt) {
    this.setState({
      lastName: evt.target.value
    })
  }

  handleChangeEmail(evt) {
    this.setState({
      email: evt.target.value
    })
  }

  handleChangeGpa(evt) {
    this.setState({
      gpa: evt.target.value
    })
  }

  handleChangeCampusId(evt) {
    this.setState({
      CampusId: 2
    })
  }


  render() {
    const { editStudentFirstName, editStudentLastName, editStudentEmail, editStudentGpa, handleSubmit, campuses, students } = this.props;
    const studentId = Number(this.props.match.params.studentId);
    const foundStudent = students.find(student => student.id === studentId);


    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(studentId, this.state)
        }}>
          <div className="form-group">
            <label>First Name</label>
            <input
              value={this.state.firstName}
              className="form-control"
              type="text"
              name="firstName"
              placeholder={foundStudent && foundStudent.firstName}
              onChange={this.handleChangeFirstName}
            />

            <label>Last Name</label>
            <input
              value={this.state.lastName}
              className="form-control"
              type="text"
              name="lastName"
              placeholder={foundStudent && foundStudent.lastName}
              onChange={this.handleChangeLastName}
            />

            <label>Email</label>
            <input
              value={this.state.email}
              className="form-control"
              type="text"
              name="email"
              placeholder={foundStudent && foundStudent.email}
              onChange={this.handleChangeEmail}
            />

            <label>GPA</label>
            <input
              value={this.state.gpa}
              className="form-control"
              type="integer"
              name="gpa"
              placeholder={foundStudent && foundStudent.gpa}
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
    handleSubmit: (studentId, newStudentState) => {
      console.log("newStudentState:", newStudentState);
      dispatch(editStudent(studentId, newStudentState, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudent);


