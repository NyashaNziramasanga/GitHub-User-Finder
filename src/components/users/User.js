import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({ match }) => {
  const { getUserRepos, repos, getUser, loading, user } = useContext(
    GithubContext
  );

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    avatar_url,
    location,
    bio,
    company,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary my-1"
          >
            <i className="fas fa-external-link-alt"></i> Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong> Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong> Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong> Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-secondary">Followers: {followers}</div>
        <div className="badge badge-secondary">Followers: {following}</div>
        <div className="badge badge-secondary">
          Public Repos: {public_repos}
        </div>
        <div className="badge badge-secondary">
          Public Gists: {public_gists}
        </div>
      </div>
      <div className="card-grid">
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
