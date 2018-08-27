import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => {

    return (
    <div id="login-main">
        <div className="login-container">
            <h2 className="login-title">Expenso</h2>
            <div id="login-form">
                <input className="login-form-field"></input>
                <input className="login-form-field"></input>
                <button className="login-form-field btn login" onClick={startLogin}>Login</button>
            </div>
        </div>
    </div>
        
    )
}

const mapDispatchtoProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default withRouter(connect(undefined, mapDispatchtoProps)(LoginPage));
