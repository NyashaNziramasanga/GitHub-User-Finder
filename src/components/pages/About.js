import React, { Fragment } from 'react';

const About = () => {
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
              href="https://github.com/NyashaNziramasanga/GitHub-User-Finder"
            >
              Github Repo
            </a>
          </p>
          <p>Built with React.js</p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
