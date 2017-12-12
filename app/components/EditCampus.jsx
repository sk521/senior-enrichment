import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCampus } from '../reducers/AllCampus';


function EditCampus (props) {
  const { handleSubmit, campuses } = props;
  console.log("THIS IS MY: ",props);
  const campusId = Number(props.match.params.campusId);
  const foundCampus = campuses.find(campus => campus.id === campusId);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">

            <label>Campus Name</label>
            <input
              className="form-control"
              type="text"
              name="campusName"
              defaultValue={foundCampus.name}
            />
            <br></br>

            <label>Campus Url</label>
            <input
              className="form-control"
              type="text"
              name="campusUrl"
              defaultValue={foundCampus.imageUrl}
            />

            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="campusDescription"
              defaultValue={foundCampus.description}
            />

          </div>
          <div className="form-group">
            <button type="submit">
            Submit</button>
          </div>
       </form>
      </div>
    )
  }


const mapStateToProps = function(state) {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  const history = ownProps.history;

  return {
    handleSubmit(event) {
      event.preventDefault();
      const campus = {
        id: campusId,
        name: event.target.campusName.value,
        imageUrl: event.target.campusUrl.value || undefined,
        description: event.target.campusDescription.value
      };
      dispatch(editCampus(campus));
      history.push('/campus_route');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
