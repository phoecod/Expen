import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, setSortByFilter, setStartDateFilter, setEndDateFilter} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export const ExpenseListFilters = class ExpenseListFilters extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			calendarFocused: null
		}
	}

	onDatesChange = ({startDate, endDate}) => {
		this.props.setStartDateFilter(startDate);
		this.props.setEndDateFilter(endDate);
	}

	onFocusChange = (calendarFocused) => {
		this.setState(() => ({calendarFocused}));
	}

	onTextChange = (e) => {
		const text = e.target.value;
		this.props.setTextFilter(text) ;
	}

	onSelectChange = (e) =>{
		this.props.setSortFilter(e.target.value);
	}

	render () {
		return (
			<div className="list-container">
				<div className="frame">
					<input id="search-expenses" placeholder="Search expenses" className="filter text-input" onChange={(e) => this.onTextChange(e)} type="text" value={this.props.filters.text} />
					<select className="filter select" onChange={(e) => this.onSelectChange(e)}>
						<option value="amount">Amount</option>
						<option value="date">Date</option>
					</select>
					<div className="filter">
						<DateRangePicker
						className="date-picker" 
						startDate={this.props.filters.startDate}
						endDate={this.props.filters.endDate}
						onDatesChange={this.onDatesChange}
						focusedInput={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={2}
						isOutsideRange={() => false}
						showClearDates={true}
						/>
					</div>
				</div>
			</div>
		);
	}
	
}

const stateToProps = (state) => {
	return {
		filters: state.filters
	}
}

const mapDispatchtoProps = (dispatch) => ({
	setStartDateFilter: (startDate) => dispatch(setStartDateFilter(startDate)),
	setEndDateFilter: (endDate) => dispatch(setEndDateFilter(endDate)),
	setSortFilter: (e) => dispatch(setSortByFilter(e)),
	setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(stateToProps,mapDispatchtoProps)(ExpenseListFilters);