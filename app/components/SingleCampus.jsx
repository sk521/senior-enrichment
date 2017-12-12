import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { deleteCampus } from '../reducers/AllCampus';

function SingleCampus (props) {
  const { handleDelete, students, campuses } = props;
  const campusId = Number(props.match.params.campusId)

  const filteredStudents = students.filter(student => student.CampusId === campusId);
  const foundCampus = campuses.find(campus => campus.id === campusId);


  return (
    <div>
      <h1>{campuses.length !== 0 && foundCampus.name} Campus</h1>

      <h3>{foundCampus.description }</h3>
      <ul className="student-list">
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

      <div>
        <NavLink to={`/campus_route/${foundCampus.id}/edit_campus`}>
          <button>Edit Campus</button>
        </NavLink>
      </div>

      <button onClick={handleDelete}>Remove Campus</button>
    </div>
  )
}



const mapStateToProps = function(state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  const foundCampus = state.campuses.find(campus => campus.id === campusId);

  return {
    campuses: state.campuses,
    students: state.students,
    foundCampus
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  const { history } = ownProps;

  return {
    handleDelete(event) {
      event.preventDefault();
      dispatch(deleteCampus(campusId));
      history.push('/campus_route');
    }
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));
