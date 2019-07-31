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
		return (
			<div>
				<form onSubmit={this.onSubmit} className="forms">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						value={this.state.text}
						onChange={this.onChange}
						style={{
							borderRadius: '20px',
							padding: '5px 20px'
						}}
					/>
					{/* <button type="submit" value="search" className="btn btn-dark btn-block fa fa-search" /> */}
				</form>
				{/* <button className="btn btn-dark btn-block" onClick={this.props.clearUsers}>
					Clear
				</button> */}
			</div>
		);
	}
}

export default Search;
