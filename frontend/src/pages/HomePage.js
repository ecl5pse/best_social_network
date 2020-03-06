import React        from 'react';
import {withRouter} from 'react-router';
import Navigation   from '../components/Navigator';
import styles       from '../styles/Page.module.scss'
import classNames   from 'classnames';

const HomePage = (props) => {
  return (
      <div className={classNames(styles.container)}>
        <h1>Home Page</h1>
        <Navigation/>
      </div>
  );
};

HomePage.propTypes = {};

export default withRouter(HomePage);