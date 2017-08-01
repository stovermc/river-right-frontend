import React,{ Component } from 'react'
import GroupMembers from './GroupMembers.jsx'
import GearItem from './GearItem.jsx'
import axios from 'axios'

class Trip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false,
      id: "",
      groupMembers: [],
      aggregatedGear: []
    }
    this.groupGear = this.groupGear.bind(this)
  }

  getGroup(tripId) {
    if (!this.state.isToggleOn) {
      axios.get(`https://river-right-be.herokuapp.com/api/v1/groups/${tripId}`)
      .then(response => {
        this.setState({ id: tripId, groupMembers: response.data, isToggleOn: true})
      })
    } else {
      this.setState({ groupMembers: [], isToggleOn: false })
    }
  }

  // getGear() {
  //   this.state.groupMembers.reduce((gearList, groupMember) => {
  //     axios.get(`http://localhost:3000/api/v1/usersGearList/${groupMember.id}`)
  //     .then(response => {
  //       this.setState({ aggregatedGear: (gearList + response.data)})
  //     })
  //   }, {})
  // }

  groupMembers() {
      return this.state.groupMembers.map(member => {
        return( <GroupMembers
                  key={member.id}
                  firstName={ member.first_name}
                  lastName={ member.last_name}
                  gearList={ this.state.aggregatedGear}
                  /> )
      })
  }

  groupGear() {
    return this.state.groupMembers.map(member => {
      axios.get(`https://river-right-be.herokuapp.com/api/v1/usersGearList/${member.id}`)
      .then(response => {
        return response.data.map(gear => {
          return (<GearItem key={gear.name} name={gear.name} />)
        })
      })
    })
  }

  render() {
    return (
      <div id="gear-types">
        <button className="action-button" onClick={() => this.getGroup(this.props.id)}>
          {this.props.name}
        </button>

      {this.groupMembers()}
      <h1>{this.groupGear()}</h1>
      </div>
    )
  }
}

export default Trip
