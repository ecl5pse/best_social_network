import React from 'react';
import {withFormik, Formik} from 'formik';
import SignInPage from '../../pages/SignInPage';

const SignInForm = (props) => {
  const {
    values,
    errors,
  } = props;

  return null;

};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

})(SignInForm);