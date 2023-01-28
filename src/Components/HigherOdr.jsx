import React from 'react'
import { useState } from 'react'
import './Component.css'

const HigherOdr = (WrappedComponent) => {
    function HigherOdr(){
        const [Counter,setCounter]=useState(0)
        function UpdateCounter(){
            setCounter(Counter+1)
    }
  return (
    <div>
        <WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter}/>

    </div>
  )
}
  return HigherOdr
}

export default HigherOdr