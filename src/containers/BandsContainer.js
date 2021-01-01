import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={mapDispatchToProps}/>
        BandsContainer
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(null, mapDispatchToProps)(BandsContainer)
