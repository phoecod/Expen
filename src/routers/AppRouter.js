import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import landingPage from '../components/landingPage';
import EditExpensePage from '../components/EditExpensePage';
import CreateExpensePage from '../components/CreateExpensePage';
import notFoundPage from '../components/notFoundPage';
import Header from '../components/header';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route exact={true} path="/" component={landingPage}/>
				<Route path="/create" component={CreateExpensePage}/>
				<Route path="/edit/:id?" component={EditExpensePage}/>
				<Route component={notFoundPage}/>
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;