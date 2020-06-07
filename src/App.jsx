import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { Alert } from './components/layout/Alert';
import AlertState from './context/alert/alertState';
import GithubState from './context/github/githubState';
import { Home } from './components/pages/Home';
import { Navbar } from './components/layout/Navbar';
import { User } from './components/users/User';
import { NotFound } from './components/pages/NotFound';

export const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
