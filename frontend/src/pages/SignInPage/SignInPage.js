import React from 'react';
import {withRouter} from 'react-router';
import styles       from './SignInPage.module.scss';
import SignInForm   from '../../components/SignInForm';
import Label from '../../components/Label';
import Navigation from '../../components/Navigator';

const SignInPage = (props) => {

  return (
      <>
        <Navigation/>
        <Label children={'Login'} className={styles.login}/>
        <SignInForm className={styles.form}/>
    </>
  );
};

export default withRouter(SignInPage);