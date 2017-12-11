import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeCampusName, writeCampusUrl, writeCampusDescription } from '../reducers/NewCampusEntry';
import { addNewCampus } from '../reducers/AllCampus';


function NewCampusEntry (props) {
  const { newCampusName, newCampusUrl, newCampusDescription, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create A Campus</label>
        <input
          value={newCampusName}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="campusName"
          placeholder="Enter Campus Name"
        />
        <br></br>
        <input
          value={newCampusUrl}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="campusUrl"
          placeholder="Enter Campus Url"
        />

        <input
          value={newCampusDescription}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="campusDescription"
          placeholder="Enter Campus Description"
        />
      </div>
      <div className="form-group">
        <button type="submit">
        Create Campus</button>
      </div>
    </form>
  );
}

const mapStateToProps = function(state) {
  return {
    newCampusName: state.newCampusEntry.newCampusName,
    newCampusUrl: state.newCampusEntry.newCampusUrl,
    newCampusDescription: state.newCampusEntry.newCampusDescription
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange: (evt) => {
      dispatch(writeCampusName(evt.target.value));
      dispatch(writeCampusUrl(evt.target.value));
      dispatch(writeCampusDescription(evt.target.value))
    },
    handleSubmit:  (evt) => {
      evt.preventDefault();
      const name = evt.target.campusName.value;
      const url = evt.target.campusUrl.value;
      const description = evt.target.campusDescription.value;

      dispatch(addNewCampus({ name: name, url: url, description: description }, ownProps.history));
      dispatch(writeCampusName(''));
      dispatch(writeCampusUrl(''));
      dispatch(writeCampusDescription(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCampusEntry);
