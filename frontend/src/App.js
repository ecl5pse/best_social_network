import React, {Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const SignInPage = lazy(() => import ('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const fallbackElem = <div className='loader'>>Loading...</div>;

function App() {
  return (
      <Router>
        <Suspense fallback={fallbackElem}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path={['/signup', '/sign_up']} component={SignUpPage}/>
            <Route path={['/signin', '/sign_in', '/login']} component={SignInPage}/>
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;
