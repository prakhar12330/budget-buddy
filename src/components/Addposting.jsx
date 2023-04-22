import React, { useState } from 'react';
import './Addposting.css'
import Laststep from './Laststep';

const Addposting = () => {

  const [data, setData] = useState(true)

  return (

    data ? (
      <>
        < h1 className='pageheader' > Want to bring Something ?</h1 >
        <h2 className='pageheader'>Tell us about your journey</h2>
        <div className='container-ap'>
          <div className='container-ap-1'>
            <div className='left-side-ap'>
              <div className='temp1'><input className='left-side-ap-top' placeholder='Coming From' type="text"></input></div>
              <div className='temp2'><input className='left-side-ap-bottom' placeholder='Departure' type="text"></input></div>
            </div>
            <div className='right-side-ap'>
              <div className='temp1'><input className='right-side-ap-top' placeholder='Going To' type="text"></input></div>
              <div className='temp2'><input className='right-side-ap-bottom' placeholder='Arrival' type="text"></input></div>
            </div>

          </div>
          <div className='container-ap-2'>
            <div className='bottom-ap'>Enter Your Flight Number</div>
            <div className='bottom-ap-input'><input className='center-bottom' placeholder='Eg : 891AFF' type="text"></input></div>

          </div>
          <div className='ls-btt'>
            <button className='ls-button' onClick={() => {
              setData(!data)
            }}>Continue</button>
          </div>
        </div>
      </>) : <Laststep />
  )
}

export default Addposting