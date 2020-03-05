import React from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigator';

const SignUpPage = (props)=> {

  return (
      <div>
        <h1>Sign Up Page</h1>
        <Navigation/>
      </div>
  )
};



export default withRouter(SignUpPage);