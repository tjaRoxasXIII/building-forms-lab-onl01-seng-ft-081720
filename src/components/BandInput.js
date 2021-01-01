// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.addBand}>
          <input type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        Band Input
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
