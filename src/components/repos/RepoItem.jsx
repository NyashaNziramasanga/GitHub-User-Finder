import React from 'react';

export const RepoItem = ({ repo }) => {
  return (
    <a target="_blank" rel="noreferrer noopener" href={repo.html_url}>
      <div className="repo-card">
        <div className="repo-details">
          <h3>
            <i className="fas fa-book"></i> {repo.name}
          </h3>
          <p>{repo.description}</p>
        </div>
        <div className="repo-stats">{repo.language ? repo.language : null}</div>
      </div>
    </a>
  );
};
