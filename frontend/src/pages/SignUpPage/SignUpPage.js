import React from 'react';
import {withRouter} from 'react-router';
import Navigation from '../../components/Navigator';
import SignUpForm from '../../components/SignUpForm';
import Label      from '../../components/Label';

const SignUpPage = (props) => {

  return (
      <>
        <Navigation/>
        <Label/>
        <SignUpForm/>
      </>
  );
};

export default withRouter(SignUpPage);