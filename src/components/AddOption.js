import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class AddOption extends React.Component {

  state = {
    error: undefined
  }
  
  addToOptions = (e) => {    
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
      <div className="">
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.addToOptions}>
          <input className="add-option-input" type="text" name="option"></input>
          <button className="button">Add Option</button>
        </form>
      </div>
      
    );
  }
}