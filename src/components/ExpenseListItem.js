import React from 'react';
import {startRemoveExpense} from '../actions/expenses';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import {FaEdit, FaTrash} from 'react-icons/fa';




export class ExpenseListItem extends React.Component {

	onClick = () => {
		const itemId = this.props.id;
		this.props.startRemoveExpense(itemId);
	}

	render () {
		return (
			<div className="item-list">
				<div className="item-left">
					<h3 className="item-description"> {this.props.description}</h3> 
					{this.props.createdAt && <span className="item-date"> {moment(this.props.createdAt).format("MMM Do YYYY")}</span>}
					{this.props.note && <div>{this.props.note}</div>}
				</div>		
				<div className="item-right">
					<span className="item-amount">{numeral(this.props.amount).format('$0, 0.00')}</span> 
					<div className="item-btns">
						<button className="sm-btn delete" onClick={ this.onClick }>
							<FaTrash />
						</button>
						<Link className="sm-btn edit" to={`/edit/${this.props.id}`}>
							<FaEdit  />
						</Link>
					</div>
				</div>
			</div>
		);
	}
	
}

const mapDispatchToProps = (dispatch) => {
	return {
		startRemoveExpense: (id) =>  dispatch(startRemoveExpense({id}))
	}
}

export default connect (undefined, mapDispatchToProps)(ExpenseListItem);