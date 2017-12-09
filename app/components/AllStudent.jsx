import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {fetchStudent} from '../reducers/AllStudent';
import {fetchCampus} from '../reducers/AllCampus';

class AllStudent extends Component {

  componentDidMount () {
    this.props.loadStudents();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.students.map(student => (
              <div className="student-profiles" key={student.id}>
                 <NavLink to={`/student_route/${student.id}`}>
                  <h2>{student.fullName}</h2>
                </NavLink>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({students}) {
  return {
    students
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadStudents: function () {
      dispatch(fetchStudent());
      dispatch(fetchCampus());
    }
  };
}

const AllStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudent);
export default AllStudentContainer;
