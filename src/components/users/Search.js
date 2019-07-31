import React, { Component } from 'react';

export class Search extends Component {
	state = {
		text: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
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
			</div>
		);
	}
}

export default Search;
