import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function NewCampusEntry(props) {
  console.log("This is my PROPS: ", props)
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create A Campus</label>
        <input
          className="form-control"
          type="text"
          campus="campusName"
          placeholder="Enter Campus Name"
          // value={props.NewCampusEntry}
          // onChange{props.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">
        Create Campus</button>
      </div>
    </form>
  )
}

const mapStateToProps = function(state) {
  return { NewCampusEntry: state.NewCampusEntry }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    hangleChange: function(evt) {
      dispatch(w)
    }
  }
}

export default NewCampusEntry;
