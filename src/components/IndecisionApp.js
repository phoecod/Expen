import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

const IndecisionApp = class IndecisionApp extends React.Component {

	state = {
		options: []
	}

	deleteOptions = () => {
		this.setState(() => {
			return {
				options : []
			}
		});
	}

	handleDeleteOption = (option) => {
		const stateOptions = this.state.options;
		let deleteInd = stateOptions.indexOf(option);
		if (deleteInd > -1) {
			this.setState((prevState) => {
				const prevOp = prevState.options;
				return {
					options: prevOp.filter(e => e != option)
				}
			});	
		}
		
	}

	handleAddOption = (option) => {
		if (!option) {
			return 'Please enter a valid option';
		} else if (this.state.options.indexOf(option) != -1) {
			return 'this item already exists...dumbo';
		}

		this.setState((prevState) => {
			return {
				options : prevState.options.concat(option)
			}
		});
	}

	componentDidMount () {
		
		try {
			const options = JSON.parse(localStorage.getItem("data"));
			if (options) {
				this.setState(() => {options});
			}
		}catch (e) {

		}

	}

	componentDidUpdate (prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const data = JSON.stringify(this.state.options);
			localStorage.setItem("data", data);
		}
	}

	render () {
		const title = 'indecision App';
		const subtitle = 'Leave it to chance!';
		return (
			<div >
				<Header title={title} subtitle={subtitle} />
				<div className="container">
					<Action options={this.state.options}/>
					<div className="widget">
						<Options 
							options={this.state.options} 
							deleteOptions={this.deleteOptions}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption handleAddOption ={this.handleAddOption}/>
					</div>
				</div>
			</div>
		)
	}
}

export default IndecisionApp;