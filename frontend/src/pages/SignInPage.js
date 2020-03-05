import React  from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigator';

const SignInPage = (props)=> {

    return (
        <div>
        <h1>Sign In Page</h1>
          <Navigation/>
        </div>
    )
};



export default withRouter(SignInPage);