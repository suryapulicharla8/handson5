import React from 'react'
    import HigherOdr from './HigherOdr'
    import './Component.css'


const ClickCom = (props) => {
    const[Counter,UpdateCounter]=props;
  return (
    <div>
        <h1 className='heading'>hoc click function</h1>
        <p className='counter'>Counter:{Counter}</p>
        <button className='btn' onClick={UpdateCounter}>clickplus</button>

       
    </div>
  )
}

export default HigherOdr(ClickCom)