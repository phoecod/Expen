import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import  { SingleDatePicker } from 'react-dates';



export const ExpenseForm = class ExpenseForm extends React.Component {

	constructor (props) {
		super (props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? props.expense.amount.toString() : '',
			note: props.expense ? props.expense.note : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			descError: undefined, 
			amountError: undefined
		}
	}

	handleAddFormExpense = (e) => {
		e.preventDefault();
		const expense = {
			description: this.state.description,
			note: this.state.note,
			amount: parseFloat(this.state.amount, 10),
			createdAt: this.state.createdAt.valueOf()
		}
		if (!this.state.amount) {
			this.setState( () => ({amountError: 'Amount cannot be empty and needs to be greater than 0 up to 2 decimal places'}));
			this.setState( () => ({amount: ''}))
		}

		if (this.state.description.length == 0) {
			this.setState(() => ({descError: 'Description cannot be empty'}));
			this.setState(() => ({description: ''}));
		}

		if (!this.state.descError || !this.state.amountError) {
			this.props.onSubmit(expense);
		}
	}

	handleDescription = (e) => {
		let description = e.target.value.trim();
		if (description.length > 0 || !description ) {
			let descError = undefined;
			this.setState(() => ({description, descError}));
		}
	}

	handleAmount = (e) => {
		let amount = e.target.value.trim();
		if (amount.match(/^\d{1,}(\.\d{0,2})?$/) || !amount) {
			let amountError = undefined;
			this.setState(() => ({amount, amountError}));
		}
	}

	handleNote = (e) => {
		let note = e.target.value.trim();
		this.setState(() => ({note}));
	}

	onDateChange = (createdAt) => {
		this.setState(() => ( {createdAt} ));
	}

	onFocusChange = ({focused}) => {
		this.setState(() => ( {calendarFocused: focused} ));
	}
	
	formPh = {
		description: "Description",
		amount: "Amount",
		note: "Note"
	}

	render () {
		return (
			<div>
				<div className="page-header">
					<div className="form-frame">
						<h3 className="header-title">{this.props.expense ? 'Edit Expense' : 'Add Expense'}</h3>
					</div>
				</div> 	
				<div className="form-container">
					<div className="form-frame">
						<form className="form" onSubmit={this.handleAddFormExpense}>
							{this.state.descError && <p className="form-error">{this.state.descError}</p>}
							<input className="form-input text-input" value={this.state.description} onChange={this.handleDescription}  placeholder={this.formPh.description} name={this.formPh.description}/><br/>
							{this.state.amountError && <p className="form-error">{this.state.amountError}</p>}
							<input className="form-input text-input" value={this.state.amount} onChange={this.handleAmount} 
								placeholder={this.formPh.amount} name={this.formPh.amount}/><br/>
							<SingleDatePicker
								className="form-input"
								date={this.state.createdAt}
								onDateChange={this.onDateChange}
								focused={this.state.calendarFocused}
								onFocusChange={this.onFocusChange}
								numberOfMonths={1}
								isOutsideRange={() => false}
							/>
							<textarea className="form-input textarea" value={this.state.note}  onChange={this.handleNote} type="text" placeholder={this.formPh.note} name={this.formPh.note}/><br/>
							<div>
							<button className="btn">{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		);
	}
	
}

const connectedExpenseForm = connect ()(ExpenseForm);

export default connectedExpenseForm;