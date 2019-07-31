import React from 'react';

function Navbar({ title }) {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<i className="fab fa-github" /> {title}
			</h1>
			<ul>
				<li>Home</li>
			</ul>
		</nav>
	);
}
export default Navbar;
