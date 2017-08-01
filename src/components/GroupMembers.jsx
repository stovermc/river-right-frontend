import React,{ Component } from 'react'

class GroupMembers extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
        <div id="trip-details">
          <ul>
            <li>{this.props.firstName}</li>
           </ul>
        </div>
    )
  }
}

export default GroupMembers
