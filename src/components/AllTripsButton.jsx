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
      this.setState({ trips: [{ id: 1, name: 'Middle Fork of the Salmon' },
                              { id: 2, name: 'Grand Canyon' },
                              { id: 3, name: 'Lochsa' }],
                      isToggleOn: true
                    })
    } else {
      this.setState({ trips: [], isToggleOn: false})
    }
  }
  tripList(allTrips) {
    return allTrips.map(trip => {
      return( <Trip key={trip.id} id={trip.id} name={trip.name} />)
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
