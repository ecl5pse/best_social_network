import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigator';

const HomePage = props => {

  return (
      <div>
        <h1>
          Home Page
        </h1>
        <Navigation/>

      </div>
  );

};

HomePage.propTypes = {};

export default withRouter( HomePage);