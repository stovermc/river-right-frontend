import React, { Component } from 'react';
import axios from 'axios'
import GearItem from './GearItem.jsx'
import GearTypeButton from './GearTypeButton.jsx'
import AllTripsButton from './AllTripsButton.jsx'
import Trip from './Trip.jsx'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
      gear: [],
      trips: []
    }
    this.gearTypes = this.gearTypes.bind(this)
  }

  gearList(allGear){
    return allGear.map(gear => {
      return ( <GearItem
        key={gear.name}
        name={gear.name}
        />
      )
    })
  }

  gearTypes(userId, gearId) {
    if (!this.state.isToggleOn) {
      axios.get(`http://localhost:3000/api/v1/geartypes/${userId}/${gearId}`)
      .then(response =>{
        this.setState({ gear: response.data, isToggleOn: true})
      })
    } else {
      this.setState({ gear: [], isToggleOn: false})
    }
  }

  tripList(allTrips) {
    return  allTrips.map(trip => {
      return( <Trip
        key={trip.name}
        name={trip.name}
        />
      )
    })
  }

  render() {
    return (
      <div id="wrapper">
        <div id="column gear-types">
          <GearTypeButton text="Raft Rig" onClick={() => this.gearTypes(1, 1)} />
          <GearTypeButton text="Kitchen" onClick={() => this.gearTypes(1, 2)} />
          <GearTypeButton text="Restroom" onClick={() => this.gearTypes(1, 3)} />
          <GearTypeButton text="Fire" onClick={() => this.gearTypes(1, 4)} />
        </div>
        <div id="column gear-info">
            {this.gearList(this.state.gear)}
        </div>
        <div id="coulumn trips">
          <AllTripsButton text="Upcoming Trips" userId={1} />
        </div>
        <div id="column all-trips">
          {this.tripList(this.state.trips)}
        </div>

      </div>
    )
  }
}

export default User
