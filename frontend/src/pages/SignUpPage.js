import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigator';

const SignUpPage = (props)=> {

  return (
      <div>
        <h1>Sign Up Page Value={props.match.params.value}</h1>
        <Navigation/>
      </div>
  )

};

SignUpPage.propTypes = {};

export default withRouter(SignUpPage);