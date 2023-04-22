import React, { useState } from 'react'
import './laststep.css'
import { useNavigate } from 'react-router-dom';

const Laststep = () => {

    const navigate = useNavigate();
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
                    <button onClick={() => {
                        navigate("/explore")
                    }} className='ls-button'>Continue</button>
                </div>
            </div>

        </>
    )
}

export default Laststep;