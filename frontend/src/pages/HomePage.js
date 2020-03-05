import React  from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigator';
import styles from '../styles/HomePage.module.scss';

const HomePage = (props) => {
  return (
      <div>
        <h1>Home Page</h1>
        <Navigation/>
      </div>
  );
};

HomePage.propTypes = {};

export default withRouter(HomePage);