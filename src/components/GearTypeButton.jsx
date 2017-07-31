import React, { Component } from 'react';
import '../App.css';

class GearTypeButton extends Component {

  render() {
    return (
        <button className="action-button" onClick={ this.props.onClick}>
          {this.props.text}
        </button>
    )
  }
}

export default GearTypeButton
