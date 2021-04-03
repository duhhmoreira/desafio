import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';

class App extends Component {
  render() {
    return (
      <SignupPage/>
      // <div>
       // <div style={{background: "black"}}></div>
        //<h3>User Authentication System</h3>
        //{this.props.children}
     // </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;