import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../../styles/Navigator.module.scss'
import classNames from 'classnames'

const Navigation = props =>{
  return(
      <nav>
        <ul className={classNames(styles.container)}>
          <button className={classNames(styles.home)}><NavLink to="/" >Home</NavLink></button>
          <li><NavLink to="/login">Sign In </NavLink></li>
          <button className={classNames(styles.signUp)}><NavLink to ="/signup">Sign Up</NavLink></button>
        </ul>
      </nav>
  )
};


export default Navigation;