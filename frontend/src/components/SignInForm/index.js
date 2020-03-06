import React                      from 'react';
import {withFormik, Formik, Form} from 'formik';
import SignInPage from '../../pages/SignInPage';
import Input      from '../Input';
import classNames from 'classnames';
import styles from '../../styles/Form.module.scss'

const SignInForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
      <Form className={classNames(styles.container)}>
        <div className={classNames(styles.input)}>
        <Input/>
        </div>
        <button className={classNames(styles.button)}>Login</button>
      </Form>
  );

};

export default withFormik({
                            mapPropsToValues: () => ({
                              email: '',
                              password: '',
                            }),

                          })(SignInForm);