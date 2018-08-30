import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => {

	return (
		<div>
			<div className="header-margin"></div>
			<header className="header">
				<div className="frame">
					<div className="nav-bar">
							<Link to="/dashboard" className="nav-btn"><h2>Expenso</h2></Link>
							<button onClick={startLogout} className="nav-btn btn" >Logout</button>
					</div>
				</div>
			</header>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);