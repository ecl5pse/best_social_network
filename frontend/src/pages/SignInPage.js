import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigator';

const SignInPage = (props)=> {

    return (
        <div>
        <h1>
          Sign In Page
        </h1>
          <Navigation/>
        </div>
    )


};

SignInPage.propTypes = {};

export default withRouter(SignInPage);