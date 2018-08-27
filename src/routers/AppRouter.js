 import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import landingPage from '../components/landingPage';
import EditExpensePage from '../components/EditExpensePage';
import CreateExpensePage from '../components/CreateExpensePage';
import notFoundPage from '../components/notFoundPage';
import LoginPage from '../components/LoginPage';
import Header from '../components/header';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
        		<PrivateRoute path="/dashboard" component={landingPage} />
				<PrivateRoute path="/create" component={CreateExpensePage}/>
				<PrivateRoute path="/edit/:id?" component={EditExpensePage}/>
				<Route component={notFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;