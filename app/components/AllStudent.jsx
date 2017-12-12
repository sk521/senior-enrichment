import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

function AllStudent(props) {

  return (
    <div>
    <NavLink to={`/newStudentEntry`}>
     <Button raised>Add New Student</Button>
    </NavLink>
      <ul>
        {
          props.students.map(student => (
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


function mapStateToProps ({students}) {
  return {
    students
  };
}

const AllStudentContainer = connect(mapStateToProps)(AllStudent);
export default AllStudentContainer;
