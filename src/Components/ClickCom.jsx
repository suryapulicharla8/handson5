import React from 'react'
import HigherOF from './HigherOdr';
// import HigherOF from './HigherOdr';
import "./Component.css"



const ClickCom = (props) => {

    const {Counter,UpdateCounter}=props;
  return (

    <div>
      
        <h1 className='heading'>HOC Click Function</h1>
        <p className='counter'>Counter:{Counter+1}</p>
        <button className="btn" onClick={UpdateCounter}>clickplus</button>
    </div>
  )
}

export default HigherOF( ClickCom);
