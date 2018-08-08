import React from 'react';
import {removeExpense, editExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';




export class ExpenseListItem extends React.Component {

	onClick = () => {
		const itemId = this.props.id;
		this.props.removeExpense(itemId);
	}

	render () {
		return (
			<div>
				<h4> {this.props.description}</h4> 
				<div>
					Amount: {numeral(this.props.amount).format('$0, 0.00')} 
					{this.props.createdAt && <div> Created At: {moment(this.props.createdAt).format("MMM Do YYYY")}</div>}
					{this.props.note && <div>{this.props.note}</div>}
					<div>
						<button className="delete" onClick={ this.onClick }>Delete</button>
						<Link to={`/edit/${this.props.id}`}>
							<button>Edit</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
	
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeExpense: (id) =>  dispatch(removeExpense({id}))
	}
}

export default connect (undefined, mapDispatchToProps)(ExpenseListItem);