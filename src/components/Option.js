import React from 'react';

const Option = (props) => {
	return (
		<div className="option">
			<li className="option-text">{props.optionValue}</li>
			<button className="button--link" onClick={() => props.deleteOption(props.optionValue)}>Delete</button>
		</div>
	);
} 

export default Option;