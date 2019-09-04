import React, { Component, Fragment } from 'react';

export class user extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      login,
      avatar_url,
      location,
      bio,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <Fragment>Username:{login}</Fragment>;
  }
}

export default user;
