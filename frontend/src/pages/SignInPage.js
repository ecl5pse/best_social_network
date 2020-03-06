import React        from 'react';
import {withRouter} from 'react-router';
import Navigation   from '../components/Navigator';
import SignInForm   from '../components/SignInForm';
import styles       from '../styles/Page.module.scss';
import classNames from 'classnames';

const SignInPage = (props) => {

  return (
      <div className={classNames(styles.container)}>
        <h1 className={classNames(styles.text)}>LOGIN TO YOUR ACCOUNT</h1>
        <Navigation/>
        <SignInForm/>
      </div>
  );
};

export default withRouter(SignInPage);