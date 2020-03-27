import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const { searchUsers, users, clearUsers } = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || text === null) {
      setAlert('Please enter something', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div style={{ marginTop: '20px' }}>
      <form onSubmit={onSubmit} className="forms">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
        <button
          type="submit"
          value="search"
          className="fas fa-search btn search-btn"
        />

        {users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
