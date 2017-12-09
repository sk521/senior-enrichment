import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';

// import { fetchCampus } from '../reducers/AllCampus';
// import { fetchStudent } from '../reducers/AllStudent';
// import store from '../store';
import AllCampus from './AllCampus';
import AllStudent from './AllStudent';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewCampusEntry from './NewCampusEntry';



export default class Root extends Component {

  // componentDidMount () {
  //   const thunkFetchCampus = fetchCampus();
  //   store.dispatch(thunkFetchCampus);

  //   const thunkFetchStudent = fetchStudent();
  //   store.dispatch(thunkFetchStudent);
  // }


  render() {
    return (
        <div>
           <Navbar />
           <main>
            <Switch>
              <Route path="/campus_route/:campusId" component={SingleCampus} />
              <Route path="/student_route/:studentId" component={SingleStudent} />
              <Route path="/newCampusEntry" component={NewCampusEntry} />
              <Route exact path="/campus_route" component={AllCampus} />
              <Route exact path="/student_route" component={AllStudent} />
            </Switch>
           </main>
        </div>
    )
  }
}

