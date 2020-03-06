import React from 'react';
import classNames from 'classnames';
import styles     from '../../styles/Input.module.scss'

const Input = (props) => {
  const {field, form, label, ...rest} = props;
  return (
      <label>
        <div className={classNames(styles.container)}>
          <input {...field} {...rest} className={classNames(styles.default, {})}
                 type="text" placeholder='Email'/>
          <input {...field} {...rest} className={classNames(styles.default, {})}
                 type="password" placeholder='Password'/>
        </div>
      </label>
  );
};

export default Input;