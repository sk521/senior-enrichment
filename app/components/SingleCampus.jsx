import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SingleCampus (props) {

  const campusId = Number(props.match.params.campusId)
  const students = props.students;
  const filteredStudents = students.filter(student => student.CampusId === campusId);
  const campuses = props.campuses;
  const foundCampus = campuses.find(campus => campus.id === campusId);


  return (
    <div>
      <h1>{campuses.length !== 0 && foundCampus.name} Campus</h1>
      <ul className='student-list'>
      {
        filteredStudents.map(student => {
          return (
            <div className="student-links" key={student.id}>
                <NavLink to={`/student_route/${student.id}`}>
                  <h2>{student.fullName}</h2>
                </NavLink>
            </div>
          )
        })
      }
      </ul>
    </div>
  )
}



const mapStateToProps = function(state) {
  return {
    campuses: state.campuses,
    students: state.students
  };
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);
export default SingleCampusContainer;
