import moment from 'moment';

const expenses = [
	{
		id: '1',
		description: "Gum",
		note: '',
		amount: 195,
		createdAt: 0
	},
	{
		id: '3',
		description: "avocado",
		note: '',
		amount: 10,
		createdAt: moment(0).add(3, 'days').valueOf()
	},
	{
		id: '4',
		description: "Credit Card",
		note: '',
		amount: 5000,
		createdAt: moment(0).subtract(12, 'days').valueOf()
	}
]

export default expenses;