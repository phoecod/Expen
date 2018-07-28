import moment from 'moment';

 const selectExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
	return expenses.filter ((expense) => {

	const createdMoment = moment(expense.createdAt);
	const startDateMatch = startDate ? createdMoment.isSameOrAfter(startDate) : true;
	const endDateMatch = endDate ? createdMoment.isSameOrBefore(endDate) : true;
	const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

	return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy ==='date') {
			return  b.createdAt - a.createdAt;
		} else if (sortBy ==='amount') {
			return b.amount - a.amount;
		}
	});
}

export default selectExpenses;