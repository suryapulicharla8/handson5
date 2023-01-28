import React from 'react'
import ClickCom from './ClickCom'
import HigherOdr from './HigherOdr'
import './Component.css'


const HoverCom = (props) => {
    const {Counter,UpdateCounter}=props

  return (
    <div>
        <div>
            <h1 className='heading'>HOC hover functon</h1> 
            <p className='counter'>Counter:{Counter}</p>
            <button className='btn' onMouseEnter={UpdateCounter}>HoverPlus</button>
       </div>
       <ClickCom/>

    </div>
  )
}

// export default HoverCom
export default HigherOdr(HoverCom)