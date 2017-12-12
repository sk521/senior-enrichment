import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from './Navbar';

import { fetchCampus } from '../reducers/AllCampus';
import { fetchStudent } from '../reducers/AllStudent';

import AllCampus from './AllCampus';
import AllStudent from './AllStudent';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewCampusEntry from './NewCampusEntry';
import NewStudentEntry from './NewStudentEntry';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';
import Home from './Home';


class Root extends Component {

  componentDidMount () {
    this.props.loadCampuses();
    this.props.loadStudents();
  }


  render() {
    return (
        <div>
          <Router>
            <div>
             <Navbar />
             <main>
              <Switch>
                <Route path="/student_route/:studentId/edit_student" component={EditStudent} />
                <Route path="/campus_route/:campusId/edit_campus" component={EditCampus} />
                <Route path="/campus_route/:campusId" component={SingleCampus} />
                <Route path="/student_route/:studentId" component={SingleStudent} />
                <Route path="/newCampusEntry" component={NewCampusEntry} />
                <Route path="/newStudentEntry" component={NewStudentEntry} />
                <Route exact path="/campus_route" component={AllCampus} />
                <Route exact path="/student_route" component={AllStudent} />
                <Route default path="/" component={Home} />
              </Switch>
             </main>
            </div>
          </Router>
        </div>
    )
  }
}



function mapDispatchToProps (dispatch) {
  return {
    loadCampuses: function () {
      dispatch(fetchCampus());
    },
    loadStudents: function () {
      dispatch(fetchStudent());
    }
  };
}


const RootContainer = connect(null, mapDispatchToProps)(Root);
export default RootContainer;
