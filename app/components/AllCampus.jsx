import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {fetchCampus} from '../reducers/AllCampus';
import {fetchStudent} from '../reducers/AllStudent';


class AllCampus extends Component {

  componentDidMount () {
    this.props.loadCampuses();
  }

  render() {

    return (
      <div>
      <NavLink to={`/newCampusEntry`}>
         <Button raised>Create New Campus</Button>
      </NavLink>
        <ul>
          {
            this.props.campuses.map(campus => (
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
}


function mapStateToProps ({campuses}) {
  return {
    campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadCampuses: function () {
      dispatch(fetchCampus());
      dispatch(fetchStudent());
    }
  };
}

const AllCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampus);
export default AllCampusContainer;

