import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import GithubState from './context/github/githubState';
import Navbar from './components/layout/Navbar';
import React, { Fragment, useState } from 'react';
import Search from './components/users/Search';
import User from './components/users/User';
import Users from './components/users/Users';

const App = () => {
  const [alert, setAlert] = useState(null);

  //Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="GitHub User Finder" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};
export default App;
