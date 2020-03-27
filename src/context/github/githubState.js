import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  GET_USERS,
  eCLEAR_USERS,
  eGET_REPOS,
  SET_LOADING,
  SET_ALERT,
  eREMOVE_ALERT
} from '../types';
import githubContext from './githubContext';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  // Get Users

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubContext.Provider
      // Available to the entire app
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
