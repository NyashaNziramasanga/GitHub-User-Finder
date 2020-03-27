import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>
        <a target="_blank" rel="noreferrer noopener" href={repo.html_url}>
          {repo.name}
        </a>
      </h3>
      <p>{repo.description}</p>
      {repo.language ? (
        <div className="badge badge-secondary">{repo.language}</div>
      ) : null}
    </div>
  );
};

export default RepoItem;
