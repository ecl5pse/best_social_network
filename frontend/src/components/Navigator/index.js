import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = props =>{
  return(
      <nav>
        <ul>
          <li><NavLink to="/">Text</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to ="/signup">Signup</NavLink></li>
        </ul>
      </nav>
  )
};


export default Navigation;