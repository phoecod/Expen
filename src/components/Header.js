import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth';
export const Header = ({startLogout}) => {

	return (
		<header className="header">
			<h1>Expenso app</h1>
			<div className="nav-bar">
					<NavLink to="/dashboard" className="header-btn" activeClassName="is-active" exact={true}>Dashboard</NavLink>
					<NavLink to="/create" className="header-btn"  activeClassName="is-active">Create</NavLink>
					<button onClick={startLogout} className="header-btn" >Logout</button>
			</div>
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);