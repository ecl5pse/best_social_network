import React from 'react';
import {withFormik} from 'formik';

const SingUpForm = () => {
  return (
      <form>

      </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',

  }),
})(SingUpForm);