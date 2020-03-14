import React, {Fragment} from 'react';
import {withRouter} from 'react-router';
import Navigation   from '../../components/Navigator';


const HomePage = (props) => {
  return (
      <Fragment>
        <h1>Home Page</h1>
        <Navigation/>
        </Fragment>
  );
};

HomePage.propTypes = {};

export default withRouter(HomePage);