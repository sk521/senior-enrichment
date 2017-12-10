import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


function AllCampus(props) {

  return (
    <div>
    <NavLink to={`/newCampusEntry`}>
       <Button raised>Create New Campus</Button>
    </NavLink>
      <ul>
        {
          props.campuses.map(campus => (
            <div className="campus-profiles" key={campus.id}>
              <NavLink to={`/campus_route/${campus.id}`}>
                <img src={campus.imageUrl} />
              </NavLink>

              <NavLink to={`/campus_route/${campus.id}`}>
                <h2>{campus.name}</h2>
              </NavLink>
            </div>
          )
        )}
      </ul>
    </div>
  );
}



function mapStateToProps ({campuses}) {
  return {
    campuses
  };
}


const AllCampusContainer = connect(mapStateToProps)(AllCampus);
export default AllCampusContainer;

