import React from 'react';
import './Addposting.css'
import Laststep from './Laststep';

const Addposting = () => {
  return (
    <>
      <h1 className='pageheader'>Want to bring Something?</h1>
      <h3 className='pageheader'>Tell us about your journey</h3>
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

        <Laststep />
      </div>
    </>
  )
}

export default Addposting