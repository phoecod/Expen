import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const landingPage = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default landingPage;