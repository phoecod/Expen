import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => {

    return (
    <div id="login-main">
        <div className="login-container">
            <h2 className="login-title">Expenso</h2>
            <p>Manage your expenses with ease!</p>
            <button className="btn login-btn" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
        
    )
}

const mapDispatchtoProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default withRouter(connect(undefined, mapDispatchtoProps)(LoginPage));
