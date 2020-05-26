import React, { Fragment } from 'react';

const About = () => {
  const url = {
    GITHUB_USER_FINDER_URL:
      'https://github.com/NyashaNziramasanga/GitHub-User-Finder',
    REACTJS_URL: 'https://reactjs.org/',
  };

  return (
    <Fragment>
      <div className="card">
        <div className="text-center">
          <h1>About This App</h1>
          <p>App to search GitHub users</p>
          <p>Version 1.0.2</p>
          <p>
            <i className="fab fa-github"></i>{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={url.GITHUB_USER_FINDER_URL}
            >
              Github Repo
            </a>
          </p>
          <p>
            Built with 
            <a target="_blank" rel="noreferrer noopener" href={url.REACTJS_URL}>
              React.js
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
