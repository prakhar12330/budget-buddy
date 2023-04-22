import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='hdr'>
            <span className='navlogo navitem' >
                <Link style={{
                    color
                        : "white",
                    textDecoration: "none",

                }} to={"/"}>BudgetBuddy</Link>
            </span>
            <div className='rightheaders'>
                <span className='navitem' >
                    <Link style={{
                        color
                            : "white",
                        textDecoration: "none",
                    }} to={"/"}>Home</Link>
                </span>
                <span className='navitem'>
                    <Link style={{
                        color
                            : "white",
                        textDecoration: "none",
                    }} to={"/explore"}>Explore</Link>
                </span>

                <span className='navitem' >
                    <Link style={{
                        color
                            : "white",
                        textDecoration: "none",
                    }} to={"/addposting"}>Add Posting</Link>
                </span>
                <span className='navitem' >
                    <Link style={{
                        color
                            : "white",
                        textDecoration: "none",
                    }} to={"/login"}>User</Link>
                </span>
            </div>
        </div >
    )
}

export default Header;