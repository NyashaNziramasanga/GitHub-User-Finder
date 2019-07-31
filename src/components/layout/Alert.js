import React from 'react';

const Alert = ({ alert }) => {
	// clearAlert = () => {
	// 	this.setState({ alert: null });
	// };

	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle" /> {alert.msg}
				{/* <i className="fas fa-times" style={{ float: 'right' }} onClick={this.props.clearAlert} /> */}
			</div>
		)
	);
};

export default Alert;
