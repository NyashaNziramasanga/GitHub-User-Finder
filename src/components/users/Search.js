import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '' || this.state.text === null) {
      this.props.setAlert('Please enter something', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div style={{ marginTop: '20px' }}>
        <form onSubmit={this.onSubmit} className="forms">
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button
            type="submit"
            value="search"
            className="fas fa-search btn search-btn"
          />

          {showClear && (
            <button className="btn btn-light btn-block" onClick={clearUsers}>
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
