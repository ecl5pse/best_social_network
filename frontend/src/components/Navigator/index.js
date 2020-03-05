import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = props =>{
  return(
      <nav>
        <ul>
          <li><button><NavLink to="/">Text</NavLink></button></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to ="/signup">Signup</NavLink></li>
        </ul>
      </nav>
  )
};


export default Navigation;