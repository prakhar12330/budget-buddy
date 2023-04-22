import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='hdr'>
            <span className='navlogo navitem' >
                <Link style={{
                    color
                        : "black",
                    opacity: 0.5
                }} to={"/"}>BudgetBuddy</Link>
            </span>
            <div className='rightheaders'>
                <span className='navitem' >
                    <Link style={{
                        color
                            : "black"
                    }} to={"/"}>Home</Link>
                </span>
                <span className='navitem'>
                    <Link style={{
                        color
                            : "black"
                    }} to={"/explore"}>Explore</Link>
                </span>
                
                <span className='navitem' >
                    <Link style={{
                        color
                            : "black"
                    }} to={"/addposting"}>Add Posting</Link>
                </span>
                <span className='navitem' >
                    <Link style={{
                        color
                            : "black"
                    }} to={"/coins"}>Log In</Link>
                </span>
            </div>
        </div>
    )
}

export default Header;