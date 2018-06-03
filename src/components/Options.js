import React from 'react';
import Option from './Option';
import ReactCSSTransitionGroup from 'react-transition-group';

const Options = (props) => {
    const optionsLength = props.options.length > 0;
    return (
      <div>
        <div className="options-header">
          <div className="option-text">You have {props.options.length} option(s)</div>
          <button className="button--link" disabled={!optionsLength} onClick={props.deleteOptions}>Remove All</button>
        </div>    
        <ol className="options-list">
        {
          props.options.map ((option, index) => {
            return <Option key={index} optionValue ={option} deleteOption={props.handleDeleteOption}/>  
          })
        }
        </ol>
      </div>
    );
}

export default Options;
