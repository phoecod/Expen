import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<header className="header">
		<h1>Expenso app</h1>
		<div className="nav-bar">
				<NavLink to="/" className="header-btn" activeClassName="is-active" exact={true}>Home</NavLink>
				<NavLink to="/create" className="header-btn"  activeClassName="is-active">Create</NavLink>
		</div>
	</header>
);
export default Header;