import React from 'react'
import './laststep.css'

const Laststep = () => {
    return (
        <>
            <h1 className='pageheader'>One Last Step...</h1>
            <div className='container-ls'>
                <div>
                    <input className='inp' type='text' placeholder='Name'></input>
                </div>


                <div>
                    <input className='inp' type='text' placeholder='Email Address'></input>
                </div>


                <div>
                    <input className='inp' type='text' placeholder='Mobile Number'></input>
                </div>


                <div>
                    <input className='inp' type='text' placeholder='Home Address'></input>
                </div>
                
                <div className='ls-btt'>
                    <button className='ls-button'>Continue</button>
                </div>
            </div>
        </>
    )
}

export default Laststep;