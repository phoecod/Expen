
class IndecisionApp extends React.Component {
	constructor (props) {
		super(props);
		this.deleteOptions = this.deleteOptions.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options : []
		}
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
			console.log("save data");
			const data = JSON.stringify(this.state.options);
			localStorage.setItem("data", data);
		}
	}

	deleteOptions () {
		this.setState(() => {
			return {
				options : []
			}
		});
	}

	handleDeleteOption (option) {
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

	handleAddOption (option) {
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
	render () {
		const title = 'indecision';
		const subtitle = 'subtle subtitle baby!';
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action options={this.state.options}/>
				<Options 
					options={this.state.options} 
					deleteOptions={this.deleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption ={this.handleAddOption}/>
			</div>
		)
	}
}

const Header = (props) => {
	return (
		<div> TESt
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
}

class Action extends React.Component {
	constructor (props) {
		super(props);
		this.chooseOption = this.chooseOption.bind(this);
	}
	chooseOption () {
		const options = this.props.options;
		console.log(this.options[Math.floor(Math.random()*options.length)]);

	}
	render () {
		const optionsLength = this.props.options.length > 0;
		return (
			<div>
				<button disabled={!optionsLength} onClick={this.chooseOption}>what should I do?</button>
			</div>
		);
	}
}

class AddOption extends React.Component {
	constructor (props) {
		super(props);
		this.addToOptions = this.addToOptions.bind(this);
		this.state = {
			error : undefined
		}
	}
	addToOptions (e) {		
		e.preventDefault();
		const value = e.target.elements.option.value.trim();
		const errorMsg = this.props.handleAddOption(value);
		this.setState(() => {
			return {
				error: errorMsg
			}
		});
		if (!errorMsg) {
			e.target.elements.option.value = '';
		}
	}
	render () {
		return (
			<div>
			{this.state.error && <p>{this.state.error}</p>}
			<form onSubmit={this.addToOptions}>
				<input type="text" name="option"></input>
				<button>Add Option</button>
			</form>
			</div>
		)
	}
}

const Options = (props) => {
		const optionsLength = props.options.length > 0;
		return (
			<div>
				You have {props.options.length} option(s)
				<button disabled={!optionsLength} onClick={props.deleteOptions}>Remove All Options</button>
				<ol>
				{
					props.options.map ((option, index) => {
						return <Option key={index} optionValue ={option} deleteOption={props.handleDeleteOption}/>	
					})
				}
				</ol>
			</div>
		);
}

const Option = (props) => {

		return (
			<div>
				<li>{props.optionValue}</li>
				<button onClick={() => props.deleteOption(props.optionValue)}>Delete</button>
			</div>
		)
} 


const User = () => {
	return (
		<div>
			<p>Name: {this.props.name}</p>
			<p>Age: {this.age}</p>
		</div>
	);
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));