import React from 'react';
import {Formik, Form, Field} from 'formik';
import Input from '../Input';
import * as Yup from 'yup';
import styles from '../../styles/Form.module.scss';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8),
});

const SignInForm = () => {

  const handleSubmit = (values, formikBag) => {
    console.log(values);
  };

  const initialValues = {
    email: '',
    password: '',
  };
  return (
      <Formik onSubmit={handleSubmit} validationSchema={loginSchema}
              initialValues={initialValues}>
        {
          ({
             values,
             errors,
             touched,
             handleChange,
             handleBlur,
             handleSubmit,
             isSubmitting,
           }) => (
              <Form className={styles.form}>
                <Field
                    name="email" type="email">
                  {
                    (emailProps) => (
                        <Input {...emailProps} label={'Email'}/>)
                  }

                </Field>
                <Field name="password" type="password">

                  {
                    (passwordProps) => (
                        <Input{...passwordProps} label={'Password'}
                              type='password'/>)
                  }

                </Field>

                {false}
                <button type="submit" disabled={isSubmitting}
                        className={styles.button}>
                  Submit
                </button>
              </Form>
          )
        }
      </Formik>
  );
};

export default SignInForm;