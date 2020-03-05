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
          <Route path="/signup:value">
            <SignUpPage/>
          </Route>
          <Route path={['/signin', '/login']}
                 render={routeProps => (<SignInPage {...routeProps}/>)}>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
