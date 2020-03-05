import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

function App() {
  return (
      <Router>
        <Switch>

          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route path={['/signup', '/sign_up']}>
            <SignUpPage/>
          </Route>

          <Route path={['/signin', '/sign_in', '/login']}>
            <SignInPage/>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
