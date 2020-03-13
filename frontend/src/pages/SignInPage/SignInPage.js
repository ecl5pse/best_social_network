import React from 'react';
import {withRouter} from 'react-router';
import './SignInPage.scss';
import SignInForm   from '../../components/SignInForm';
import Label from '../../components/Label';
import Navigation from '../../components/Navigator';

const SignInPage = (props) => {

  return (


  <>
    <Navigation/>
    <Label/>
    <SignInForm/>
    </>

  );
};

export default withRouter(SignInPage);