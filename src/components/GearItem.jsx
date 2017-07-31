import React, { Component } from 'react'

class GearItem extends Component {

  render() {
    return (
        <div className="gear-item"> {this.props.name}
        </div>
    )
  }
}

export default GearItem
