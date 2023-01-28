import React, { Component } from 'react'
import PropCom from './PropCom'
import './Component.css'


 class PureCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
  render() {
    return (
      <div>PureCom
        <PropCom count={this.state.count}/>
        <button  className='btn' onClick={()=>this.setState({count:this.state.count+1})}>Update Pure Count</button>
      </div>
    )
  }
}

export default PureCom