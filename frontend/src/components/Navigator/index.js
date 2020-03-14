import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigator.module.scss'
import classNames from 'classnames'

const Navigation =(props) =>{
  return(
      <nav className={classNames(styles.nav)}>
        <ul className={classNames(styles.container)}>
          <button className={classNames(styles.button)}><NavLink to="/login">Sign In </NavLink></button>
          <button className={classNames(styles.button)}><NavLink to ="/signup">Sign Up</NavLink></button>
        </ul>
      </nav>
  )
};


export default Navigation;