import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const action = class Action extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			selectedOption: undefined,
			showModal: false
		}
	}

	chooseOption = () => {
		const option = this.props.options[Math.floor(Math.random()*this.props.options.length)];
		if (!!option) {
			this.setState(() => {
				return {
					selectedOption: option,
					showModal: true
				}
			}); 
		}
	}

	handleCloseModal  = () => {
		this.setState({ showModal: false});
	}

	render = () => {
		const optionsLength = this.props.options.length > 0;
		return (
			<div>
				<button className="big-button" disabled={!optionsLength} onClick={this.chooseOption}>what should I do?</button>
				<ReactModal
					className = "modal"
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					contentLabel="Selected Option"
					className="modal"
					closeTimeoutMS={500}
				>
					<h1 className=".modal-title">Selected Option</h1>
					<h2 className="modal-body">{this.state.selectedOption}</h2>
					<button className="button" onClick={this.handleCloseModal}>Back</button>
				</ReactModal>
			</div>
		);
	}
}

export default action;
