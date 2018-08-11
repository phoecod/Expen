import moment from 'moment';

const selectExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
	return expenses.filter ((expense) => {

	const createdMoment = moment(expense.createdAt);
	const startDateMatch = startDate ? createdMoment.isSameOrAfter(startDate) : true;
	const endDateMatch = endDate ? createdMoment.isSameOrBefore(endDate) : true;
	const textMatch = text.length > 0 ? expense.description.toLowerCase().includes(text.toLowerCase()) : true;

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