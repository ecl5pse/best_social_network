import React                     from 'react';
import {withFormik, Form, Field} from 'formik';
import Input                     from '../Input';
import *as Yup                   from 'yup';
import Label                     from '../Label';
import styles                    from './SignUpForm.module.scss';
import StyledErrorMessage        from '../Error';
import Button from '../Button ';

const SignUpForm = (props) => {

  const {values, isSubmitting} = props;
  const fieldRender = (name, type, placeholder) => {
    return (
        <Field name={name} value={values[name]}>
          {
            fieldProps => (
                <Label className={styles.fieldWrapper}>
                  <Input placeholder={placeholder} type={type} {...fieldProps}/>
                  <StyledErrorMessage className={styles.errorWrapper} name={fieldProps.field.name}/>
                </Label>
            )
          }
        </Field>
    )
  }
  return (
    <Form className={styles.form}>
      {
        fieldRender('firstName', 'text', 'First Name')
      }
      {
        fieldRender('lastName', 'text', 'Last Name')
      }
      {
        fieldRender('email','email','Email')
      }
      {
        fieldRender('password', 'password', 'Password')
      }
      {
        fieldRender('confirmPassword', 'password', 'Confirm Password')
      }
        <Button type="submit" disabled={isSubmitting} className={styles.submitButton}>Submit</Button>
      </Form>
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
                            handleSubmit: (values, formikBag) => {

                             alert(JSON.stringify(values,null,4))
                            },
                            validateSchema:Yup.object({
                              firstName:Yup.string().required(),
                              lastName: Yup.string().required(),
                              email: Yup.string().email().required(),
                              password: Yup.string().required(),
                              confirmPassword: Yup.string().required()
                            })
                          })(SignUpForm);