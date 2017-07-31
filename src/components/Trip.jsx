import React,{ Component } from 'react'
    
class Trip extends Component {
  render() {
    return (
      <button className="action-button" onClick={ this.props.onClick}>
        {this.props.name}
      </button>
    )
  }
}

export default Trip
