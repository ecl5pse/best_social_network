import React from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigator';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = (props)=> {

  return (
      <div>
        <h1>Sign Up Page</h1>
  {/*      <Navigation/>*/}
        <SignUpForm/>
      </div>
  )
};



export default withRouter(SignUpPage);