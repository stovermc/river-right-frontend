import React,{ Component } from 'react'
import Trip from './Trip.jsx'

class AllTripsButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
      trips: []
    }
  }

  getTrips(userId) {
    if (!this.state.isToggleOn) {
      this.setState({ trips: ['Middle Fork of the Salmon', 'Grand Canyon', 'Gates of Lodore'],
                      isToggleOn: true})
    } else {
      this.setState({ trips: [], isToggleOn: false})
    }
  }
  tripList(allTrips) {
    return allTrips.map(trip => {
      return( <Trip key={trip} name={trip}
        />
      )
    })
  }

  render() {
    return (
      <div id="gear-types">
        <button className="action-button" onClick={ () => this.getTrips(this.props.userId)}>
          {this.props.text}
        </button>
        {this.tripList(this.state.trips)}
      </div>
    )
  }
}

export default AllTripsButton
