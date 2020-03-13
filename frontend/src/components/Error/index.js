import React from 'react';
import PropTypes from 'prop-types';
import {ErrorMessage} from 'formik';


const StaledErrorMassage = ({name, ...rest})=>{

  return (
        <ErrorMessage name={name}>
          {
            msg=><span >{msg}</span>
          }

        </ErrorMessage>
  );

};


StaledErrorMassage.propTypes = {

  name:PropTypes.string.isRequired,
  className:PropTypes.string,
};

export default StaledErrorMassage;