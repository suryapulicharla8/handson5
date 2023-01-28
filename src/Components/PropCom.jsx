import React, { Component } from 'react'
import './Component.css'

 class PropCom extends Component {
  render() {
    return (
      <div>
        <h1 className='heading'>Prop Component render by pure Component</h1>
        <p className='counter'>Counter:{this.props.counter}</p>
      </div>
    )
  }
}
export default PropCom
