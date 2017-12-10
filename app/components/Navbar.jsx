import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AppBar from  'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import PersonOutlineIcon from 'material-ui-icons/PersonOutline';
import PublicIcon from 'material-ui-icons/Public';
import HomeIcon from 'material-ui-icons/Home';
// import Icon from 'material-ui/Icon/';

import AllCampus from './AllCampus';


import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles/';
import indigo from 'material-ui/colors/indigo';
import blueGrey from 'material-ui/colors/blueGrey';
import red from 'material-ui/colors/red';


const theme = createMuiTheme({
  type: 'dark',
  palette: {
    primary: indigo,
    secondary: blueGrey,
    error: red
  }
});

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state={selectedTab: 0}
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange(event, value) {
    this.setState({selectedTab: value})
  }

  render() {
    let {selectedTab} = this.state;
    return (

      // const HomeIcon = <Icon>home</Icon>
      <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={this.onTabChange} centered>
          <Tab icon={<HomeIcon />}
          label="Home"
          component={Link}
          to="/"
          />

          <Tab icon={<PublicIcon />}
          label="Campus"
          component={Link}
          to="/campus_route"
          />

          <Tab icon={<PersonOutlineIcon />}
          label="Student"
          component={Link}
          to="/student_route"
          />
        </Tabs>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}


export default Navbar;



