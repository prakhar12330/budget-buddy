import React from 'react';
import './Explore.css';
import './Explore.jsx';
import './temp.js';
import Card from './Card'

const Explore = () => {
    return (
        <div>
            <h1 className='pageheader'>Let's get something!</h1>
            <div class="container">
                <div class="left-side">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div class="right-side">
                    <div id="display">more information.</div>
                </div>
            </div>
        </div>
    )
}

export default Explore

